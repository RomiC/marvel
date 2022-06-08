import ContentLoader from "react-content-loader";

export default function Skeleton({data}) {  
return(
    <ContentLoader viewBox="0 0 900 507" height={507} width={900} {...data}>
                          <rect x="30" y="20" rx="0" ry="0" width="130" height="23" />
                          <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
                          <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
                          <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
                          <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
                          <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
                          <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
                          <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
                          <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
                        </ContentLoader>)  
}
