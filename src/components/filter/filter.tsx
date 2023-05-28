"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Filter from "@/enums/filter";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import { AppContext } from "@/context/app-context";

const FilterTasks = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const { selectedFilter, setSelectedFilter } = useContext(AppContext);

	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (filter: Filter) => {
		setSelectedFilter(filter);
		setAnchorEl(null);
	};

	const filterItems = [Filter.ALL, Filter.DONE, Filter.IN_PROGRESS];

	const menuItems = filterItems.map((item) => (
		<div key={item}>
			<MenuItem onClick={() => handleClose(item)}>
				<div style={{ width: 25 }}>
					{item === selectedFilter && <CheckIcon />}
				</div>

				{item}
			</MenuItem>
		</div>
	));

	return (
		<div>
			<Button
				id="fade-button"
				aria-controls={open ? "fade-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Filter
				<FilterListIcon />
			</Button>
			<Menu
				id="fade-menu"
				MenuListProps={{
					"aria-labelledby": "fade-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{menuItems}
			</Menu>
		</div>
	);
};
export default FilterTasks;
