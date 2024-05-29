import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
export default function App() {
    return(
        <div className='app'>
        <TwitterFollowCard initialIsFollowing  userName="midudev" name="Miguel angel durán"/>
        <TwitterFollowCard  userName="phralb" name="Pablo Hernández"/>
        <TwitterFollowCard  userName="elonmusk" name="Elon Musk"/>
        </div>
    )
}