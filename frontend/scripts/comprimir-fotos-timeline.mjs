import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/animacion/color-iluminacion-acabado",
);

const archivos = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));

for (const f of archivos) {
  const p = path.join(dir, f);
  const before = fs.statSync(p).size;
  const meta = await sharp(p).metadata();
  const tmp = `${p}.tmp.jpg`;
  await sharp(p)
    .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(tmp);
  fs.renameSync(tmp, p);
  const after = fs.statSync(p).size;
  const afterMeta = await sharp(p).metadata();
  console.log(
    `${f} ${meta.width}x${meta.height} ${Math.round(before / 1024)}KB -> ${afterMeta.width}x${afterMeta.height} ${Math.round(after / 1024)}KB`,
  );
}
