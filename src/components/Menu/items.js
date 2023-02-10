import { nanoid } from "nanoid";
import { RiHomeHeartLine } from 'react-icons/ri';
import { MdOutlineLocalMovies } from 'react-icons/md';

const items = [
  {
    id: nanoid(),
    to: "/",
    content: "Home",
    icon: <RiHomeHeartLine />
  },
  {
    id: nanoid(),
    to: "/movies",
    content: "Movies",
    icon: <MdOutlineLocalMovies/>
  }
]

export default items;