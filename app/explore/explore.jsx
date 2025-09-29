
"use client";
import React, { useEffect, useState } from 'react'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Link from 'next/link';
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { db } from '../config/firebaseConfig';

const Explore = ({ session }) => {
    const [poems, setPoems] = useState([]);
    const [filteredPoems, setFilteredPoems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Search and filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBy, setFilterBy] = useState('all'); // 'all', 'title', 'author', 'content'

    const fetchPoems = async () => {
        const poemArray = []
        const querySnapshot = await getDocs(collection(db, "verses"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const poemsObject = {
                id: doc.id,
                ...doc.data()
            }
            poemArray.push(poemsObject)
        });
        setPoems(poemArray)
        setFilteredPoems(poemArray) // Initially show all poems
        setLoading(false)
        // console.log(poems);
    }

    // Search function - filters poems based on search term and filter type
    const handleSearch = (searchValue, filterType) => {
        if (!searchValue.trim()) {
            // If search is empty, show all poems
            setFilteredPoems(poems);
            return;
        }

        const filtered = poems.filter(poem => {
            const searchLower = searchValue.toLowerCase();
            
            switch (filterType) {
                case 'title':
                    return poem.title?.toLowerCase().includes(searchLower);
                case 'author':
                    return poem.author?.toLowerCase().includes(searchLower);
                case 'content':
                    return poem.poem?.toLowerCase().includes(searchLower);
                case 'all':
                default:
                    // Search in title, author, and content
                    return (
                        poem.title?.toLowerCase().includes(searchLower) ||
                        poem.author?.toLowerCase().includes(searchLower) ||
                        poem.poem?.toLowerCase().includes(searchLower)
                    );
            }
        });

        setFilteredPoems(filtered);
    };

    // Handle search input change
    const onSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value, filterBy);
    };

    // Handle filter dropdown change
    const onFilterChange = (e) => {
        const value = e.target.value;
        setFilterBy(value);
        handleSearch(searchTerm, value);
    };

    // Clear search function
    const clearSearch = () => {
        setSearchTerm('');
        setFilterBy('all');
        setFilteredPoems(poems);
    };

    useEffect(() => { fetchPoems() }, [])

    // Re-run search when poems data changes
    useEffect(() => {
        if (searchTerm) {
            handleSearch(searchTerm, filterBy);
        } else {
            setFilteredPoems(poems);
        }
    }, [poems]);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "verses", id));
        // Remove deleted poem from both arrays
        const updatedPoems = poems.filter(poem => poem.id !== id);
        setPoems(updatedPoems);
        setFilteredPoems(filteredPoems.filter(poem => poem.id !== id));
    }

    return (
        <main className='min-h-dvh p-3'>
            <h1 className='text-center m-5 font-bold text-2xl text-gray-800 w-3/4 mx-auto'>
                Explore our catalogue of wonderfully crafted Poems and interact with our Renowned authors.
            </h1>

            {/* Search and Filter Section */}
            <div className='max-w-4xl mx-auto mb-8'>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                    {/* Search Input */}
                    <div className='relative flex-1 max-w-md'>
                        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type="text"
                            placeholder="Search poems..."
                            value={searchTerm}
                            onChange={onSearchChange}
                            className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className='flex items-center gap-2'>
                        <label htmlFor="filter" className='text-sm font-medium text-gray-700'>
                            Search in:
                        </label>
                        <select
                            id="filter"
                            value={filterBy}
                            onChange={onFilterChange}
                            className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                            <option value="all">All Fields</option>
                            <option value="title">Title Only</option>
                            <option value="author">Author Only</option>
                            <option value="content">Content Only</option>
                        </select>
                    </div>

                    {/* Clear Button */}
                    {(searchTerm || filterBy !== 'all') && (
                        <button
                            onClick={clearSearch}
                            className='px-4 py-2 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors'
                        >
                            Clear
                        </button>
                    )}
                </div>

                {/* Search Results Info */}
                <div className='text-center mt-4 text-sm text-gray-600'>
                    {searchTerm ? (
                        <p>
                            Found {filteredPoems.length} poem{filteredPoems.length !== 1 ? 's' : ''} 
                            {searchTerm && ` matching "${searchTerm}"`}
                        </p>
                    ) : (
                        <p>Showing all {poems.length} poem{poems.length !== 1 ? 's' : ''}</p>
                    )}
                </div>
            </div>

            {
                loading ? <div className='h-[80vh] flex items-center justify-center'><BiLoaderCircle className='text-4xl animate-spin' /></div> :
                    <>
                        {filteredPoems.length === 0 && !loading ? (
                            <div className='text-center py-12'>
                                <p className='text-gray-500 text-lg'>No poems found matching your search.</p>
                                <button
                                    onClick={clearSearch}
                                    className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                                >
                                    Show All Poems
                                </button>
                            </div>
                        ) : (
                            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                    filteredPoems.map((poem, i) => (
                                        <div key={poem.id} className='shadow-md p-3 rounded-md flex flex-col justify-between'>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <img src={poem.img} alt={poem.author} className='rounded-full h-8 w-8' />
                                                    <p>{poem.author}</p>
                                                </div>
                                                {
                                                    poem.authorId == session.user.id ?
                                                        <button onClick={() => handleDelete(poem.id)}>
                                                            <FaRegTrashCan />
                                                        </button> : null
                                                }
                                            </div>
                                            <div className='mt-3'>
                                                <p className='font-semibold'>
                                                    Title: <span>{poem.title}</span>
                                                </p>
                                                <p className='line-clamp-2 text-sm mt-2'>
                                                    {poem.poem}
                                                </p>
                                            </div>
                                            <div className='flex items-center justify-between mt-4'>
                                                <p className='text-xs'>
                                                    Posted on <span>{poem.timestamp}</span>
                                                </p>
                                                <Link href={`/explore/${poem.id}`} className='text-xs underline'>Read More</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </section>
                        )}
                    </>
            }
        </main>
    )
}

export default Explore
