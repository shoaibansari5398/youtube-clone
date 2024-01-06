import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggwstions, setShowSuggestions] = useState(false);

	const dispatch = useDispatch();

	const searchCache = useSelector(store=>store.search);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => clearTimeout(timer);
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);

		dispatch(cacheResults({
			[searchQuery]:json[1]
		}))
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
		console.log("toggleMenu");
	};

	return (
		<div className="grid grid-flow-col p-5  shadow-lg">
			<div className="col-span-3 flex">
				<img
					onClick={toggleMenuHandler}
					className="h-8 cursor-pointer"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
				/>
				<img
					className="h-8 mx-2"
					alt="youtube"
					src="https://gstatic.com/youtube/img/branding/youtubeicon/2x/youtube_main_icon_2x_158x110.png"
				/>
			</div>
			<div className="col-span-8">
				<div>
					<input
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
					/>
					<button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
						Search
					</button>
				</div>
				{showSuggwstions && (
					<div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
						<ul>
							{suggestions.map((s) => (
								<li className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1">
				<img
					className="h-8"
					src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
				/>
			</div>
		</div>
	);
};

export default Head;
