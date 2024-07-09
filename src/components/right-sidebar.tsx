import React from "react";
import { ArrowLeft } from "lucide-react";

export function RightSidebar() {
	return (
		<div className="col-span-3 w-full border-l py-1 px-2 border-slate-800">
			<section className="my-3">
				<h3 className="text-sm mb-2 w-full flex items-center justify-between">
					Bookmarks
					<button className="flex hover:border-b text-xs items-center space-x-1">
						<ArrowLeft size={14} /> <span>Save</span>
					</button>
				</h3>
				<div className="flex gap-1 flex-wrap">
					<button className="flex group p-[3px]  bg-slate-900 text-white text-[10px] rounded hover:bg-slate-800 transition-colors duration-300">
						<span className="items-center justify-center hidden group-hover:inline transition-opacity duration-300">
							#
						</span>
						<span className="group-hover:underline">Lorem i veniam!</span>
					</button>
					<button className="flex group p-[3px]  bg-slate-900 text-white text-[10px] rounded hover:bg-slate-800 transition-colors duration-300">
						<span className="items-center justify-center hidden group-hover:inline transition-opacity duration-300">
							#
						</span>
						<span className="group-hover:underline">Tempora neque uti</span>
					</button>
					<button className="flex group p-[3px]  bg-slate-900 text-white text-[10px] rounded hover:bg-slate-800 transition-colors duration-300">
						<span className="items-center justify-center hidden group-hover:inline transition-opacity duration-300">
							#
						</span>
						<span className="group-hover:underline">
							culpa recusandae deleniti adipisci veniam!
						</span>
					</button>
					<button className="flex group p-[3px]  bg-slate-900 text-white text-[10px] rounded hover:bg-slate-800 transition-colors duration-300">
						<span className="items-center justify-center hidden group-hover:inline transition-opacity duration-300">
							#
						</span>
						<span className="group-hover:underline">
							deleniti voluptate ducimus
						</span>
					</button>
				</div>
			</section>
			<hr className="border-b w-full" />
			<section className="my-3 place-self-start text-wrap break-words ">
				<h3 className="text-sm mb-2">Suggestions</h3>
				<button className="text-xs list-item list-inside text-slate-400 hover:border-slate-400 hover:border-b">
					Do you want to add a new column?
				</button>
				<button className="text-xs list-item list-inside text-slate-400 hover:border-slate-400 hover:border-b">
					Should the I filter this?
				</button>
				<button className="text-xs list-item list-inside text-slate-400 hover:border-slate-400 hover:border-b">
					Do you want to know what is the difference between the items on the
					left to the right side of the table?
				</button>
			</section>
		</div>
	);
}
