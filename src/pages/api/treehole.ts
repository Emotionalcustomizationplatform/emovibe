import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { message } = req.body;
  const { data, error } = await supabase
    .from("treehole")
    .insert([{ message }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data[0]);
}
