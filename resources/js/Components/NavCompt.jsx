import { Link } from "@inertiajs/inertia-react";
import { Breadcrumbs } from "@mui/material";
import React from "react";

export const BreadcrumbsEl = ({ list }) => {
    // console.log(list);
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                {list.map((d, i) => (
                    <Link
                        key={i}
                        underline="hover"
                        color="inherit"
                        href={d.href}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        {d.title}
                    </Link>
                ))}
            </Breadcrumbs>
        </div>
    );
};
