// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};



export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getPostsDocument: PostsDocument;
  getPostsList: PostsConnection;
  getGlobalDocument: GlobalDocument;
  getGlobalList: GlobalConnection;
  getAuthorsDocument: AuthorsDocument;
  getAuthorsList: AuthorsConnection;
  getPagesDocument: PagesDocument;
  getPagesList: PagesConnection;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetPostsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetPostsListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetGlobalDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetGlobalListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetAuthorsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetAuthorsListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetPagesListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label: Scalars['String'];
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DocumentNode = PostsDocument | GlobalDocument | AuthorsDocument | PagesDocument;

export type PostsAuthorDocument = AuthorsDocument;

export type Posts = {
  __typename?: 'Posts';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<PostsAuthorDocument>;
  date?: Maybe<Scalars['String']>;
  featureImg?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostsDocument = Node & Document & {
  __typename?: 'PostsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Posts;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PostsConnectionEdges = {
  __typename?: 'PostsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PostsDocument>;
};

export type PostsConnection = Connection & {
  __typename?: 'PostsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<PostsConnectionEdges>>>;
};

export type GlobalHeaderIcon = {
  __typename?: 'GlobalHeaderIcon';
  color?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GlobalHeaderNav = {
  __typename?: 'GlobalHeaderNav';
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type GlobalHeader = {
  __typename?: 'GlobalHeader';
  icon?: Maybe<GlobalHeaderIcon>;
  color?: Maybe<Scalars['String']>;
  nav?: Maybe<Array<Maybe<GlobalHeaderNav>>>;
};

export type GlobalFooterSocial = {
  __typename?: 'GlobalFooterSocial';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type GlobalFooter = {
  __typename?: 'GlobalFooter';
  color?: Maybe<Scalars['String']>;
  social?: Maybe<GlobalFooterSocial>;
};

export type GlobalRedirects = {
  __typename?: 'GlobalRedirects';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type GlobalTheme = {
  __typename?: 'GlobalTheme';
  color?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  darkMode?: Maybe<Scalars['String']>;
};

export type Global = {
  __typename?: 'Global';
  header?: Maybe<GlobalHeader>;
  footer?: Maybe<GlobalFooter>;
  gtmId?: Maybe<Scalars['String']>;
  redirects?: Maybe<Array<Maybe<GlobalRedirects>>>;
  theme?: Maybe<GlobalTheme>;
};

export type GlobalDocument = Node & Document & {
  __typename?: 'GlobalDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Global;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type GlobalConnectionEdges = {
  __typename?: 'GlobalConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GlobalDocument>;
};

export type GlobalConnection = Connection & {
  __typename?: 'GlobalConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<GlobalConnectionEdges>>>;
};

export type Authors = {
  __typename?: 'Authors';
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type AuthorsDocument = Node & Document & {
  __typename?: 'AuthorsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Authors;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type AuthorsConnectionEdges = {
  __typename?: 'AuthorsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AuthorsDocument>;
};

export type AuthorsConnection = Connection & {
  __typename?: 'AuthorsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<AuthorsConnectionEdges>>>;
};

export type PagesBlocksFeatureImage = {
  __typename?: 'PagesBlocksFeatureImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureButtons = {
  __typename?: 'PagesBlocksFeatureButtons';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureStyleBackgroundImage = {
  __typename?: 'PagesBlocksFeatureStyleBackgroundImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureStyle = {
  __typename?: 'PagesBlocksFeatureStyle';
  flipLayout?: Maybe<Scalars['Boolean']>;
  imageStyle?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksFeatureStyleBackgroundImage>;
  textAlignment?: Maybe<Scalars['String']>;
  contentAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeature = {
  __typename?: 'PagesBlocksFeature';
  image?: Maybe<PagesBlocksFeatureImage>;
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksFeatureButtons>>>;
  style?: Maybe<PagesBlocksFeatureStyle>;
  navigationLabel?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsButtons = {
  __typename?: 'PagesBlocksPhotoCardsButtons';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsItemsImage = {
  __typename?: 'PagesBlocksPhotoCardsItemsImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsItems = {
  __typename?: 'PagesBlocksPhotoCardsItems';
  image?: Maybe<PagesBlocksPhotoCardsItemsImage>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsStyleBackgroundImage = {
  __typename?: 'PagesBlocksPhotoCardsStyleBackgroundImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsStyle = {
  __typename?: 'PagesBlocksPhotoCardsStyle';
  columns?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksPhotoCardsStyleBackgroundImage>;
  textAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsCardStyle = {
  __typename?: 'PagesBlocksPhotoCardsCardStyle';
  type?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  accentColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCards = {
  __typename?: 'PagesBlocksPhotoCards';
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksPhotoCardsButtons>>>;
  items?: Maybe<Array<Maybe<PagesBlocksPhotoCardsItems>>>;
  navigationLabel?: Maybe<Scalars['String']>;
  style?: Maybe<PagesBlocksPhotoCardsStyle>;
  cardStyle?: Maybe<PagesBlocksPhotoCardsCardStyle>;
};

export type PagesBlocksTextCardsButtons = {
  __typename?: 'PagesBlocksTextCardsButtons';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsItems = {
  __typename?: 'PagesBlocksTextCardsItems';
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  accentColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsStyleBackgroundImage = {
  __typename?: 'PagesBlocksTextCardsStyleBackgroundImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsStyle = {
  __typename?: 'PagesBlocksTextCardsStyle';
  columns?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksTextCardsStyleBackgroundImage>;
  textAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsCardStyle = {
  __typename?: 'PagesBlocksTextCardsCardStyle';
  type?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  accentColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCards = {
  __typename?: 'PagesBlocksTextCards';
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksTextCardsButtons>>>;
  items?: Maybe<Array<Maybe<PagesBlocksTextCardsItems>>>;
  navigationLabel?: Maybe<Scalars['String']>;
  style?: Maybe<PagesBlocksTextCardsStyle>;
  cardStyle?: Maybe<PagesBlocksTextCardsCardStyle>;
};

export type PagesBlocksBannerImage = {
  __typename?: 'PagesBlocksBannerImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerButtons = {
  __typename?: 'PagesBlocksBannerButtons';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerStyleBackgroundImage = {
  __typename?: 'PagesBlocksBannerStyleBackgroundImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerStyle = {
  __typename?: 'PagesBlocksBannerStyle';
  textColor?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksBannerStyleBackgroundImage>;
  textSize?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  textAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type PagesBlocksBanner = {
  __typename?: 'PagesBlocksBanner';
  image?: Maybe<PagesBlocksBannerImage>;
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksBannerButtons>>>;
  navigationLabel?: Maybe<Scalars['String']>;
  style?: Maybe<PagesBlocksBannerStyle>;
};

export type PagesBlocks = PagesBlocksFeature | PagesBlocksPhotoCards | PagesBlocksTextCards | PagesBlocksBanner;

export type PagesNavItems = {
  __typename?: 'PagesNavItems';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type PagesStyle = {
  __typename?: 'PagesStyle';
  primary?: Maybe<Scalars['String']>;
  accent1?: Maybe<Scalars['String']>;
  accent2?: Maybe<Scalars['String']>;
  accent3?: Maybe<Scalars['String']>;
  navTextColor?: Maybe<Scalars['String']>;
  navBackgroundColor?: Maybe<Scalars['String']>;
};

export type Pages = {
  __typename?: 'Pages';
  draft?: Maybe<Scalars['Boolean']>;
  blocks?: Maybe<Array<Maybe<PagesBlocks>>>;
  siteTitle?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  siteImageSrc?: Maybe<Scalars['String']>;
  navItems?: Maybe<Array<Maybe<PagesNavItems>>>;
  style?: Maybe<PagesStyle>;
};

export type PagesDocument = Node & Document & {
  __typename?: 'PagesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Pages;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PagesDocument>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  updatePostsDocument: PostsDocument;
  updateGlobalDocument: GlobalDocument;
  updateAuthorsDocument: AuthorsDocument;
  updatePagesDocument: PagesDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePostsDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostsMutation;
};


export type MutationUpdateGlobalDocumentArgs = {
  relativePath: Scalars['String'];
  params: GlobalMutation;
};


export type MutationUpdateAuthorsDocumentArgs = {
  relativePath: Scalars['String'];
  params: AuthorsMutation;
};


export type MutationUpdatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};

export type DocumentMutation = {
  posts?: Maybe<PostsMutation>;
  global?: Maybe<GlobalMutation>;
  authors?: Maybe<AuthorsMutation>;
  pages?: Maybe<PagesMutation>;
};

export type PostsMutation = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  featureImg?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type GlobalHeaderIconMutation = {
  color?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GlobalHeaderNavMutation = {
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type GlobalHeaderMutation = {
  icon?: Maybe<GlobalHeaderIconMutation>;
  color?: Maybe<Scalars['String']>;
  nav?: Maybe<Array<Maybe<GlobalHeaderNavMutation>>>;
};

export type GlobalFooterSocialMutation = {
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type GlobalFooterMutation = {
  color?: Maybe<Scalars['String']>;
  social?: Maybe<GlobalFooterSocialMutation>;
};

export type GlobalRedirectsMutation = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type GlobalThemeMutation = {
  color?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  darkMode?: Maybe<Scalars['String']>;
};

export type GlobalMutation = {
  header?: Maybe<GlobalHeaderMutation>;
  footer?: Maybe<GlobalFooterMutation>;
  gtmId?: Maybe<Scalars['String']>;
  redirects?: Maybe<Array<Maybe<GlobalRedirectsMutation>>>;
  theme?: Maybe<GlobalThemeMutation>;
};

export type AuthorsMutation = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureButtonsMutation = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureStyleBackgroundImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureStyleMutation = {
  flipLayout?: Maybe<Scalars['Boolean']>;
  imageStyle?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksFeatureStyleBackgroundImageMutation>;
  textAlignment?: Maybe<Scalars['String']>;
  contentAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeatureMutation = {
  image?: Maybe<PagesBlocksFeatureImageMutation>;
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksFeatureButtonsMutation>>>;
  style?: Maybe<PagesBlocksFeatureStyleMutation>;
  navigationLabel?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsButtonsMutation = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsItemsImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsItemsMutation = {
  image?: Maybe<PagesBlocksPhotoCardsItemsImageMutation>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsStyleBackgroundImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsStyleMutation = {
  columns?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksPhotoCardsStyleBackgroundImageMutation>;
  textAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsCardStyleMutation = {
  type?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  accentColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksPhotoCardsMutation = {
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksPhotoCardsButtonsMutation>>>;
  items?: Maybe<Array<Maybe<PagesBlocksPhotoCardsItemsMutation>>>;
  navigationLabel?: Maybe<Scalars['String']>;
  style?: Maybe<PagesBlocksPhotoCardsStyleMutation>;
  cardStyle?: Maybe<PagesBlocksPhotoCardsCardStyleMutation>;
};

export type PagesBlocksTextCardsButtonsMutation = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsItemsMutation = {
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  accentColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsStyleBackgroundImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsStyleMutation = {
  columns?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksTextCardsStyleBackgroundImageMutation>;
  textAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsCardStyleMutation = {
  type?: Maybe<Scalars['String']>;
  buttonType?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textSize?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  accentColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksTextCardsMutation = {
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksTextCardsButtonsMutation>>>;
  items?: Maybe<Array<Maybe<PagesBlocksTextCardsItemsMutation>>>;
  navigationLabel?: Maybe<Scalars['String']>;
  style?: Maybe<PagesBlocksTextCardsStyleMutation>;
  cardStyle?: Maybe<PagesBlocksTextCardsCardStyleMutation>;
};

export type PagesBlocksBannerImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerButtonsMutation = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerStyleBackgroundImageMutation = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerStyleMutation = {
  textColor?: Maybe<Scalars['String']>;
  headlineColor?: Maybe<Scalars['String']>;
  subheadColor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<PagesBlocksBannerStyleBackgroundImageMutation>;
  textSize?: Maybe<Scalars['String']>;
  headlineSize?: Maybe<Scalars['String']>;
  subheadSize?: Maybe<Scalars['String']>;
  textAlignment?: Maybe<Scalars['String']>;
  contentOrder?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type PagesBlocksBannerMutation = {
  image?: Maybe<PagesBlocksBannerImageMutation>;
  label?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PagesBlocksBannerButtonsMutation>>>;
  navigationLabel?: Maybe<Scalars['String']>;
  style?: Maybe<PagesBlocksBannerStyleMutation>;
};

export type PagesBlocksMutation = {
  feature?: Maybe<PagesBlocksFeatureMutation>;
  photoCards?: Maybe<PagesBlocksPhotoCardsMutation>;
  textCards?: Maybe<PagesBlocksTextCardsMutation>;
  banner?: Maybe<PagesBlocksBannerMutation>;
};

export type PagesNavItemsMutation = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type PagesStyleMutation = {
  primary?: Maybe<Scalars['String']>;
  accent1?: Maybe<Scalars['String']>;
  accent2?: Maybe<Scalars['String']>;
  accent3?: Maybe<Scalars['String']>;
  navTextColor?: Maybe<Scalars['String']>;
  navBackgroundColor?: Maybe<Scalars['String']>;
};

export type PagesMutation = {
  draft?: Maybe<Scalars['Boolean']>;
  blocks?: Maybe<Array<Maybe<PagesBlocksMutation>>>;
  siteTitle?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  siteImageSrc?: Maybe<Scalars['String']>;
  navItems?: Maybe<Array<Maybe<PagesNavItemsMutation>>>;
  style?: Maybe<PagesStyleMutation>;
};

