import { dbPut, dbQuery } from './../utils/responses.js';

const createTeamRelatedEntity = async ({ item, query }) => {
  try {
    await dbPut({ item });
    const data = await dbQuery({ query });
    return data[0];
  } catch (error) {
    console.error('Error in creating team related entity:', error);
    throw error;
  }
};

export { createTeamRelatedEntity };
