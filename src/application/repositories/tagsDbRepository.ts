export default function tagsRepository(repository:any) {
    const add = (tag:any) => repository.add(tag);
    const findAllTags = () => repository.findAllTags();

    return {
        add,
        findAllTags
    };
}