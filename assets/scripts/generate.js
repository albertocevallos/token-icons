const fs = require("fs-extra");
const path = require("path");
const pagePrefix = path.join(__dirname, "../blockchains");
const getTargetPath = () => {
  return path.join(__dirname, "../data/", `metadata.json`);
};

const getMetadata = async (parentPath) => {
  const filePath = path.join(parentPath, "assets");
  const children = await fs.readdir(filePath);
  const transform = await Promise.all(
    children.map(async (item) => {
      const childPath = path.join(filePath, item) + "/info.json";
      const content = await fs.readJson(childPath);
      return content;
    })
  );
  return transform;
};

const getMap = async (parentPath, name) => {
  const filePath = path.join(parentPath, "assets");
  const children = await fs.readdir(filePath);
  const transform = await Promise.all(
    children.map(async (item) => {
      const childPath = path.join(filePath, item) + "/info.json";
      const content = await fs.readJson(childPath);
      return { id: content.id, chain: name };
    })
  );
  return transform;
};

(async () => {
  try {
    const locales = (await fs.readdir(pagePrefix)).filter((name) => {
      const fullPath = path.join(pagePrefix, name);
      return fs.statSync(fullPath).isDirectory();
    });
    const sortdMetaData = await Promise.all(
      locales.map(async (name) => {
        const dir = path.join(pagePrefix, name);
        const metadata = await getMetadata(dir);
        const map = await getMap(dir, name);
        const writeTo = path.join(
          __dirname,
          `../blockchains/${name}/`,
          `metadata.json`
        );
        await fs.writeJson(writeTo, metadata);
        return { name, assets: map };
      })
    );

    // const combineMultiple = sortdMetaData.reduce(
    //   (obj, cur) => ({ ...obj, [cur.name]: cur }),
    //   {}
    // );
    const combineSingle = sortdMetaData.flatMap(({ assets }) => assets);

    const targetPath = getTargetPath();
    await fs.ensureFile(targetPath);
    await fs.writeJson(targetPath, combineSingle);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
