import { Flex, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function Comments({ comments }) {
    return (
        <ul id="comments-container">
            {comments?.data?.map(comment => {
                const timestamp = new Date(comment.timestamp);
                return (
                    <li className="comment-item" key={comment._id}>
                        <Flex flexDirection="row" justifyContent="space-between">
                            <Text noOfLines={1} fontWeight="bold">{comment.username}</Text>
                            <Text minWidth="fit-content" paddingInlineEnd={2} fontSize='xs' paddingBlock={1}>
                                {
                                    `${timestamp.getDate()} ` + 
                                    `${timestamp.toLocaleString('default', { month: 'short' })} ` + 
                                    `${timestamp.getFullYear()} ` +
                                    `- ${timestamp.getHours()}:` +
                                    `${(timestamp.getMinutes()<10?'0':'') + timestamp.getMinutes()}`
                                }
                            </Text>
                        </Flex>
                        <Text marginBottom={2} fontSize="sm">{comment.comment}</Text>
                    </li>
                )
            })}
        </ul>
    )
}

Comments.propTypes = {
    comments: PropTypes.shape({
        data: PropTypes.array
    })
}