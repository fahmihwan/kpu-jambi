import { Link } from "@inertiajs/inertia-react";
import { Button, List } from "@mui/material";
import React from "react";

export const Pagination = ({ links, totals }) => {
    return (
        <div
            style={{
                padding: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
            }}
        >
            <span>total : {totals}</span>
            <List sx={{ display: "flex" }}>
                {links.map((link, key) =>
                    link.url === null ? (
                        <li key={key} className="disabled ">
                            <Link style={{ textDecoration: "none" }}>
                                <Button variant="outlined" type="button">
                                    {link.label}
                                </Button>
                            </Link>
                        </li>
                    ) : (
                        <li
                            key={key}
                            className={`page-item ${link.active && "active"}`}
                        >
                            <Link
                                style={{ textDecoration: "none" }}
                                key={key}
                                href={link.url}
                            >
                                <Button variant="outlined" type="button">
                                    {link.label}
                                </Button>
                            </Link>
                        </li>
                    )
                )}
            </List>
        </div>
    );
};
