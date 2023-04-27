// Initialized counter
let countLikeReaction = 1;
let countDislikeReaction = 1;
let countLoveReaction = 1;

// Get all button references
const likeBtn = document.querySelector('.like');
const disLikeBtn = document.querySelector('.dislike');
const loveBtn = document.querySelector('.love');

// get all span tag
const countLike = document.querySelector('.count-like');
const countDislike = document.querySelector('.count-dislike');
const countLove = document.querySelector('.count-love');

// get total ref.
const totalLikes = document.querySelector('.total-like');
const totalDisLikes = document.querySelector('.total-dislike');
const totalLoves = document.querySelector('.total-love');


const incrementLike = () => {
  countLike.innerHTML = countLikeReaction++;
  // console.log(countLikeReaction);
  totalLikes.innerHTML = countLikeReaction - 1;
}

const decrementLike = () => {
  countDislike.innerHTML = Math.abs(countDislikeReaction--);
  // console.log(countDislikeReaction);
  totalDisLikes.innerHTML = Math.abs(countDislikeReaction + 1);
}

const reactLove = () => {
  countLove.innerHTML = countLoveReaction++;
  totalLoves.innerHTML = countLoveReaction - 1;
}

likeBtn.addEventListener('click', incrementLike);
disLikeBtn.addEventListener('click', decrementLike);
loveBtn.addEventListener('click', reactLove);