import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  IconButton,
  Text,
  VStack,
  useDisclosure,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';

const Chatbot = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const questions = [
    {
      question: 'Do you accept %?',
      answer: 'Sometimes. Only if I see that your game/game idea is interesting and see good potential in it.',
    },
    {
      question: 'Quais tecnologias você usa?',
      answer: 'Eu uso React, Node.js, Python e outras tecnologias modernas.',
    },
    {
      question: 'Onde posso ver seus projetos?',
      answer: 'Você pode ver meus projetos aqui no portfólio ou no meu GitHub.',
    },
  ];

  // Função que simula digitação gradual
  const typeMessage = (fullText, delay = 25) =>
    new Promise((resolve) => {
      let currentText = '';
      const interval = setInterval(() => {
        currentText += fullText[currentText.length];
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = currentText;
          return updated;
        });
        if (currentText.length === fullText.length) {
          clearInterval(interval);
          resolve();
        }
      }, delay);
    });

  const handleQuestionSelect = async (question) => {
    const answer = questions.find((q) => q.question === question)?.answer;
    if (!answer) return;

    // Adiciona mensagem do usuário
    setMessages((prev) => [...prev, { text: question, sender: 'user' }]);
    setIsTyping(true);

    // Espera um tempinho antes de o bot responder
    setTimeout(async () => {
      setMessages((prev) => [...prev, { text: '', sender: 'bot' }]);
      await typeMessage(answer, 25);
      setIsTyping(false);
    }, 600);
  };

  const bg = useColorModeValue('gray.800', 'gray.700');
  const messageBgUser = useColorModeValue('blue.600', 'blue.500');
  const messageBgBot = useColorModeValue('gray.600', 'gray.600');

  return (
    <Box position="fixed" bottom="24px" right="24px" zIndex="1000">
      <IconButton
        colorScheme="blue"
        icon={isOpen ? <CloseIcon /> : <ChatIcon />}
        onClick={onToggle}
        rounded="full"
        size="lg"
        shadow="md"
      />
      <Collapse in={isOpen} animateOpacity>
        <Box
          w="320px"
          h="440px"
          bg={bg}
          color="white"
          rounded="xl"
          mt={3}
          p={4}
          boxShadow="xl"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex justify="space-between" align="center" mb={3}>
            <Heading size="md">Chatbot</Heading>
          </Flex>

          <Box flex="1" overflowY="auto" p={2}>
            <VStack align="stretch" spacing={2}>
              {messages.map((msg, i) => (
                <Box
                  key={i}
                  alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                  bg={msg.sender === 'user' ? messageBgUser : messageBgBot}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  maxW="80%"
                >
                  <Text fontSize="sm" whiteSpace="pre-line">
                    {msg.text}
                  </Text>
                </Box>
              ))}
              {isTyping && (
                <Box
                  alignSelf="flex-start"
                  bg={messageBgBot}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  maxW="80%"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Spinner size="xs" /> <Text fontSize="sm">Typing...</Text>
                </Box>
              )}
            </VStack>
          </Box>

          <Flex wrap="wrap" gap={2} mt={3}>
            {questions.map((q) => (
              <Button
                key={q.question}
                size="sm"
                colorScheme="teal"
                variant="outline"
                flex="1 1 100%"
                onClick={() => handleQuestionSelect(q.question)}
                isDisabled={isTyping}
              >
                {q.question}
              </Button>
            ))}
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Chatbot;
