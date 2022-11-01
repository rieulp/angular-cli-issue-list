import { IIssueDetail, IssueContext } from '@/store/IssueContextProvider';
import { useContext, useEffect, useState } from 'react';

const useIssue = (issue_number: string) => {
  const [issue, setIssue] = useState<IIssueDetail>();
  const [error, setError] = useState<Error>();
  const { getDetailData } = useContext(IssueContext);

  useEffect(() => {
    getDetailData?.(issue_number)
      .then((value) => {
        if (value) setIssue(value);
      })
      .catch((err) => {
        // console.error('error', err, typeof err);
        setError(err);
      });
  }, [getDetailData, issue_number]);

  return { issue, error };
};

export default useIssue;
