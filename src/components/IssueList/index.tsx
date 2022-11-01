import { IssueContext } from '@/store/IssueContextProvider';
import AdImage from '@/components/AdImage';
import IssueItem from '@/components/IssueItem';
import LoadingBar from '@/components/LoadingBar';

const IssueList = () => {
  return (
    <div>
      <IssueContext.Consumer>
        {({ issues, isLoading }) => (
          <>
            {issues?.flat().map((issue, index) =>
              index === 4 ? (
                <>
                  <AdImage />
                  <IssueItem key={issue.number} {...issue} />
                </>
              ) : (
                <IssueItem key={issue.number} {...issue} />
              ),
            )}
            {isLoading && <LoadingBar />}
          </>
        )}
      </IssueContext.Consumer>
    </div>
  );
};

export default IssueList;
