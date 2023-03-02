import express from "express";

const route =  express.Router();

route.get('/ads',(req, res) => {
  return res.status(200).json([
    { id: 1, name: 'Ad 1'},
    { id: 2, name: 'Ad 2'},
    { id: 3, name: 'Ad 3'},
    { id: 4, name: 'Ad 4'},
  ]);
});

export default route;