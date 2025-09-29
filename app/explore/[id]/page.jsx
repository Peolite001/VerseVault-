import { db } from "@/app/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export const fetchsinglePoem = async (id)=>{
    if(!id) {
        return null;
    }

const docRef = doc(db, "verses", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data()
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

}

export default async function exploreDynamic ({params}) {
    const poem = await fetchsinglePoem(params.id)
    return(
    <main className="min-h-dvh md:w-4xl mx-auto p-3 md:p-6 shadow-sm md:space-y-5">
      <Link href={"/explore"}>
         <button className="p-2 text-xl rounded-full mb-5 hover:bg-gray-100 transition-all 
         duration-200 cursor-pointer"><FaArrowLeftLong /></button>
      </Link>
       <div className="flex items-center gap-3">
        <img src={poem.img} alt={poem.author.slice(0,1).toUpperCase()}  className="w-8 h-8 rounded-full"/>
        <h1>{poem.author}</h1>
       </div>

       <div>
        <h1 className="my-5 font-bold text-2xl text-gray-800 uppercase">{poem.title}</h1>
        <p className="leading-8">{poem.poem}</p>
       </div>

       <p>{poem.timestamp}</p>
    </main>
    )
}