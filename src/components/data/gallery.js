const imageModules = import.meta.glob(
    '../../assets/gameplay/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: "default"
    }
);


const gallery = Object.entries(imageModules).map(([path, image], index) => ({
    id: index + 1,
    image,
    title: path
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
})) 

export default gallery;