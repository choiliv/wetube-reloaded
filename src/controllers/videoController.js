import e from "express";


export const trending = (req, res) => { 
 const videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 3,
        comments: 8,
        createdAt: "8 minutes ago",
        views: 324,
        id: 1,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 5,
        createdAt: "1 minutes ago",
        views: 12,
        id: 1,
    },

  ]
    return res.render("home", { pageTitle: "Home", videos }); 
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"});
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
