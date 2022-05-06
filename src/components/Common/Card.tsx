import { Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export const Card = ({ data }: any) => {
    const [liked, setLiked] = useState<any>([]);
    return (
        <Flex justify="space-between" flexWrap="wrap">
            {data.map((item: any, index: any) => {
                return (
                    <Flex
                        key={index}
                        w="300px"
                        direction="column"
                        m="5"
                        p="3"
                        bg="gray.800"
                        borderRadius="xl"
                    >
                        <NextImage
                            src={item?.poster}
                            alt="Post Iamge"
                            width="300"
                            height="300"
                        ></NextImage>
                        <Flex mt="10" color="white" direction="column">
                            <Heading fontSize="sm">{item?.title}</Heading>
                            <Flex direction="column">
                                <Text>Genre: {item.genre}</Text>
                                <Text>IMDD Rating :{item.imdbRating}</Text>
                                <Text>Release Date :{item.released}</Text>
                            </Flex>
                            <IconButton
                                aria-label="Search database"
                                boxSize="50"
                                icon={<FiHeart />}
                                colorScheme={
                                    liked.includes(index) ? "pink" : "black"
                                }
                                onClick={() => {
                                    setLiked((prev: any) => [...prev, index]);
                                }}
                            />
                        </Flex>
                    </Flex>
                );
            })}
        </Flex>
    );
};
