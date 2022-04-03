//Ejecutable principal del server
import app from "./app";

async function main() {
  //Server On
  const port = 8080;

  await app.listen(port, async () => {
    console.log(`Server on port http://localhost:${port}`);
  });
}

main();
