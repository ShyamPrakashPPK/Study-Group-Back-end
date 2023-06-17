// import blog from '../../../entities/blog';
// import { ObjectId } from 'mongodb';
// import blogDbRepository from '../../repositories/blogDbRepository';


// const dbRepository = blogDbRepository(blogDbRepository());

// // Replace `DBRepositoryType` with the appropriate type for `dbRepository`
// // Replace `TagsRepositoryType` with the appropriate type for `tagsRepository`
// export default async function createBlog(
//     {
//     id,
//     title,
//     details,
//     date,
//     tags,
//     dbRepository,
//     tagsRepository
// }: {
//     id: string;
//     title: string;
//     details: string;
//     date: Date;
//     tags: string[];
//     dbRepository: DBRepositoryType;
//     tagsRepository: TagsRepositoryType;
// }): Promise<any> {
//     let tagId: ObjectId[] = [];
//     if (tags.length !== 0) {
//         const tagIds = tags.map(async (tag) => {
//             const { _id } = await tagsRepository.add(tag.split(' ').join(''));
//             return _id;
//         });

//         tagId = await Promise.all(tagIds);
//     }

//     const newBlog = new blog({
//         user: new ObjectId(id),
//         title: title,
//         details: details,
//         date: date,
//         tags: tagId
//     });

//     return dbRepository.create(newBlog);
// }
