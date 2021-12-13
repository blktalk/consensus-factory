import { getStaticPropsForTina } from "tinacms";
import { Blocks } from "../components/blocks";
import { Header } from "../components/header";
import { layoutQueryFragment } from "../components/layout";
import type { PagesDocument } from "../.tina/__generated__/types";

export default function IndexPage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  return (
    <>
      <Header {...props.data.getPagesDocument.data} />
      <Blocks {...props.data.getPagesDocument.data} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `
      query ContentQuery($relativePath: String!) {
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          data {
            __typename
            draft
            blocks {
              __typename
              ... on PagesBlocksPhotoCards {
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                items {
                  image {
                    src
                    alt
                  }
                  headline
                  subhead
                  text
                  link
                  buttonLabel
                }
                style {
                  minHeight
                  columns
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                }
                cardStyle {
                  type
                  buttonType
                  textColor
                  textSize
                  headlineColor
                  headlineSize
                  subheadColor
                  subheadSize
                  backgroundColor
                  accentColor
                  buttonTextColor
                }
                navigationLabel
              }
              ... on PagesBlocksTextCards {
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                items {
                  headline
                  subhead
                  text
                  link
                  buttonLabel
                  accentColor
                }
                style {
                  minHeight
                  columns
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                }
                cardStyle {
                  type
                  buttonType
                  textColor
                  textSize
                  headlineColor
                  headlineSize
                  subheadColor
                  subheadSize
                  backgroundColor
                  accentColor
                  buttonTextColor
                }
                navigationLabel
              }
              ... on PagesBlocksFeature {
                image {
                  src
                  alt
                }
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                style {
                  minHeight
                  flipLayout
                  imageStyle
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                  textAlignment
                  contentAlignment
                  contentOrder
                }
                navigationLabel
              }
              ... on PagesBlocksBanner {
                image {
                  src
                  alt
                }
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                style {
                  minHeight
                  width
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                  textAlignment
                  contentOrder
                }
                navigationLabel
              }
            }
            meta {
              siteTitle
              siteDescription
              siteImageSrc
            }
            nav {
              navItems {
                link
                label
              }
              navTextColor
              navBackgroundColor
            }
            colors {
              primary
              accent1
              accent2
              accent3
              accent4
              white
              grayLight
              gray
              grayDark
              black
            }
          }
        }
      }
  `,
    variables: { relativePath: `index.md` },
  })) as { data: { getPagesDocument: PagesDocument } };

  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
