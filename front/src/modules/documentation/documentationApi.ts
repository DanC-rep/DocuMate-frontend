import type { FilesByProjects } from "../../models/filesByProjects";
import type { FileUrl } from "../../models/fileUrl";
import { baseApi } from "../../shared/api/baseApi";

export const documentationApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getFilesList: builder.query<FilesByProjects, void>({
         query: () => 'files',
      }),
      getFilePresignedUrl: builder.query<FileUrl, string>({
         query: (id) => `files/${id}/presigned`
      })
   })
})

export const { useGetFilesListQuery, useGetFilePresignedUrlQuery } = documentationApi