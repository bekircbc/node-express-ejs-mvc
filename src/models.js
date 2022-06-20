import nouns from './dataSources/nouns_apiCall.js';
import books from './dataSources/books_localJsonFile.js';
import translations from './dataSources/translations_excelFile.js';
import jobs from './dataSources/jobs_mdFiles.js';
import landscapePhotos from './dataSources/images_landscapePhotos.js';

export const siteData = {
    nouns,
    books,
    translations,
    jobs,
    landscapePhotos
};
