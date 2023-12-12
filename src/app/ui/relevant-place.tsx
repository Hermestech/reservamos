import { RelevantPlaceType } from "../lib/definitions";

export const RelevantPlace: React.FC<RelevantPlaceType>= ({
    display,
    city_name,
}: RelevantPlaceType
) => { 
    return (
        <article className="w-full h-full border-2 border-black m-2 p-4 bg-white text-black flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">{display}</p>
            <p className="text-xl">{city_name}</p>
        </article>
    );
}    