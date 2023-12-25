
import React from "react";

const Head = () => {
	return (
		<div className="grid grid-flow-col p-5  shadow-lg">
			<div className="col-span-3 flex">
				<img
					className="h-8"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
				/>
				<img
					className="h-8 mx-2"
					alt="youtube"
					src="https://gstatic.com/youtube/img/branding/youtubeicon/2x/youtube_main_icon_2x_158x110.png"
				/>
			</div>
			<div className="col-span-8">
				<input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" />
				<button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
					Search
				</button>
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
