import { ObjectId } from 'mongodb';
import { QuestionModel } from '../../../types/questionInterface';

export default async function createQuestion({
    id,
    title,
    description,
    date,
    tags,
    dbRepository,
    tagsRepository,
}: {
    id: string;
    title: string;
    description: string;
    date: Date;
    tags: string[];
    dbRepository: any; // Replace with the appropriate type
    tagsRepository: any; // Replace with the appropriate type
}): Promise<QuestionModel> {
    let tagId: ObjectId[] = [];

    if (tags.length !== 0) {
        const tagIds = await Promise.all(
            tags.map(async (tag) => {
                const { _id } = await tagsRepository.add(tag.split(' ').join(''));
                return _id;
            })
        );

        tagId = tagIds.map((tagId) => new ObjectId(tagId));
    }

    const newQuestion: QuestionModel = {
        user: new ObjectId(id),
        title,
        description,
        date,
        tags: tagId,
    };

    return dbRepository.create(newQuestion);
}
