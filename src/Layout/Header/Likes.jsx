// import { useState, useEffect } from "react";
// import { Heart } from "lucide-react"; // outline and solid
// import { db } from "../../Firebase";
// import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

// const LikeWidget = () => {
//   const [likes, setLikes] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const likesDocRef = doc(db, "likes", "globalCounter");
//   const localStorageKey = "hasLiked";

//   useEffect(() => {
//     const fetchLikes = async () => {
//       const docSnap = await getDoc(likesDocRef);
//       if (docSnap.exists()) {
//         setLikes(docSnap.data().count);
//       }
//     };
//     fetchLikes();

//     const liked = localStorage.getItem(localStorageKey);
//     setHasLiked(!!liked);
//   }, []);

//   const handleLike = async () => {
//     if (hasLiked) return;

//     setLoading(true);
//     try {
//       await updateDoc(likesDocRef, { count: increment(1) });

//       setLikes((prev) => prev + 1);
//       setHasLiked(true);
//       localStorage.setItem(localStorageKey, "true");
//     } catch (err) {
//       console.error("Error updating likes:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div onClick={handleLike} className="font-ibm flex items-center gap-1 font-bold cursor-pointer select-none bg-youtube rounded-xl px-2 py-0.5 hover:bg-sub transition"   >
//       {hasLiked ? (
//         <Heart fill="white" color="white" size={14} />
//       ) : (
//         <Heart color="white" size={14} />
//       )}
//       <span className="text-white text-xs">{likes}</span>
//     </div>

//   );
// };

// export default LikeWidget;
