import {
  // type GetResponseTypeFromEndpointMethod,
  type GetResponseDataTypeFromEndpointMethod,
} from '@octokit/types';

import { Octokit } from 'octokit';

const octokit = new Octokit();

export type RepositoriesResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForUser
>;
// export type GetRepositoryResponse = Partial<Pick<RepositoriesResponse[number], keyof RepositoryRes>>
export type GetRepositoryResponse = Partial<RepositoriesResponse[number]>;
