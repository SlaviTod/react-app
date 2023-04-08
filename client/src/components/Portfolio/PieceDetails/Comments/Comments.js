import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';
import { CommentsList } from './CommentsList';

export const Comments = ({
    comments,
}) => {

    const { t } = useTranslation();

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>{t('comments_sec')}: {comments.length} {t('comments')}</Accordion.Header>
                <Accordion.Body>
                    <CommentsList comments={comments}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};