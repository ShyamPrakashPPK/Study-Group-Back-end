import Tag from "../../../database/mongoDb/models/tagModel";


export default function () {
    const add = async (tag:any) => {
        const newTag = {
            name: tag
        };

        return await Tag.findOneAndUpdate({ name: newTag.name }, { $set: newTag }, { upsert: true });
    }

    const findAllTags = () => {
        return Tag
            .find()
            .select('name')
            .exec()
    }

    return {
        add,
        findAllTags
    }
}