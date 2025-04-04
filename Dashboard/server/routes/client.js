import express from "express";
import {
  getProducts,
  getVisitors,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/visitors", getVisitors);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
