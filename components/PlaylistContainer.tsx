import { PlaylistCard } from "./PlaylistCard";

interface PlaylistContainer{
    title: string;
}

const PlaylistContainer = ({title}: PlaylistContainer) => {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex justify-between">
                <span className="text-white font-bold text-xl">{title}</span>
                <span className="text-sm text">Show all</span>
            </div>
            <div className="flex gap-4">
                <PlaylistCard 
                    title={"Today's Top Hits"} 
                    description="Jung Kook is on top of the Hottest 50!"
                    image="/images/disco.jpg"/>
                <PlaylistCard 
                    title={"Rap Caviar"} 
                    description="New music from Drake, Rod Wave and Doja Cat"
                    image="/images/drake.jpg" />
            </div>
        </section>
    );
}

export { PlaylistContainer }