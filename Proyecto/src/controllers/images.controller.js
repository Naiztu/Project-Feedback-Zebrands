export async function postImages(req, res) {
  console.log(req.file);
  res.send(req.file);
}
