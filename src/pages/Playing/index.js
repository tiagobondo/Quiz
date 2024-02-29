import React, { useState, useEffect } from 'react';
import {
      View,
      TouchableOpacity,
      Text,
      Alert,
      Modal,
      StatusBar
} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

import {styles} from './style'
import {Title} from '../../components/Title'

export default function Quiz(props){
  const [questoes, setQuestions] = useState([
    // lista de perguntas
    {
       id: 1,
       questao: 'Em que data o IMPU foi inaugurado oficialmente?',
       opcoes: ['03/01/2010', '28/01/2009', '4/02/2008', '10/03/2011'],
       respostaCerta: '03/01/2010' 
    },
    { 
      id: 2,
      questao: 'Quem inaugurou o instituto médio politécnico do Uíge?',
      opcoes: ['José Eduardo dos Santos', 'Manuel Quarta Punza', 'Pinda Simão','António Burity da Silva'],
      respostaCerta: 'António Burity da Silva' 
    },
    { id: 3,
      questao: 'Quantos cursos tem no IMPU?',
      opcoes: ['6', '4', '8', '5'],
      respostaCerta: '6' 
    },
    { id: 4,
      questao: 'O nome Manuel Quarta Punza foi homenagem ao...?',
      opcoes: ['1ºGovernador da província do Uíge', '6ºGovernador da província do Uíge', '1ºPresidente da república','2ºGovernador da província do Uíge'],
      respostaCerta: '6ºGovernador da província do Uíge' 
    },
    { id: 5,
      questao: 'Onde está localizado o instituto médio politécnico do Uíge?',
      opcoes: ['Uíge-Papelão-Zona 01', 'Uíge-Sonangol-Zona 02', 'Uíge-Ana Candande-Zona 02','Uíge-Ana Candande-Zona 01'],
      respostaCerta: 'Uíge-Ana Candande-Zona 01' 
    },
    { id: 6,
      questao: 'Em que ano o IMPU entrou em funcionamento?',
      opcoes: ['2010', '2009', '2011','2008'],
      respostaCerta: '2009' 
    },
    { id: 7,
      questao: 'Qual dos cursos não é ministrado no IMPU?',
      opcoes: ['Técnico de frio e climatização', 'Técnico de informática', 'Técnico de energias renováveis','Técnico de construção cívil'],
      respostaCerta: 'Técnico de frio e climatização' 
    },
    { id: 8,
      questao: 'Qual é o nome do primeiro director geral do IMPU?',
      opcoes: ['Manuel Distinto Fernando', 'Jorge António', 'António Sequeira','Adolfo Raimundo'],
      respostaCerta: 'Jorge António' 
    },
    { id: 9,
      questao: 'Qual é o nome do segundo director geral do IMPU?',
      opcoes: ['Manuel Distinto Fernando', 'Jorge António','Adolfo Raimundo', 'António Sequeira'],
      respostaCerta: 'António Sequeira' 
    },
    { id: 10,
      questao: 'Qual é o nome do terceiro director geral do IMPU?',
      opcoes: ['Jorge António','Adolfo Raimundo', 'António Sequeira','Manuel Distinto Fernando'],
      respostaCerta: 'Manuel Distinto Fernando' 
    },
    { id: 12,
      questao: 'Qual é o nome do terceiro director geral do IMPU?',
      opcoes: ['Jorge António','Adolfo Raimundo', 'António Sequeira','Manuel Fernando'],
      respostaCerta: 'Manuel Fernando' 
    },
    { id: 13,
      questao: 'Quem foi Adolfo Raimundo?',
      opcoes: ['Director Pedagógico', 'Director Geral','Director Administrativo', 'Secretário'],
      respostaCerta: 'Director Pedagógico' 
    },
    { id: 14,
      questao: 'Qual é o nome da primeira mulher na área administrativa?',
      opcoes: ['Irondina José Bengui', 'Maria Filomena dos Anjos','Marta Lídia Raúl Silvestre', 'Berta Zacarias'],
      respostaCerta: 'Maria Filomena dos Anjos' 
    },
    { id: 15,
      questao: 'Qual é o nome da segunda mulher na área administrativa?',
      opcoes: ['Maria Filomena dos Anjos','Marta Lídia Raúl Silvestre','Irondina José Bengui', 'Berta Zacarias'],
      respostaCerta: 'Irondina José Bengui' 
    },
    { id: 16,
      questao: 'De 2009 à 2024 quantos directores gerais já passaram no IMPU?',
      opcoes: ['5','2','4', '3'],
      respostaCerta: '3' 
    },
    { id: 17,
      questao: 'Em que ano foi implementado a biblioteca no IMPU?',
      opcoes: ['2011','2009','2013', '2010'],
      respostaCerta: '2011' 
    },
    { id: 18,
      questao: 'Em que ano foi realizada a IªFeira empreendedora no IMPU?',
      opcoes: ['2020','2023','2022', '2024'],
      respostaCerta: '2023' 
    },
    { id: 19,
      questao: 'Em que ano a equipa de voleibol do IMPU foi para Cabinda?',
      opcoes: ['2014','2019','2023', '2012'],
      respostaCerta: '2023' 
    },
    { id: 20,
      questao: 'Irondina José Bengui antes de ser directora administrativa foi...?',
      opcoes: ['Professora de empreendedorismo','Professora de OGI','Professora de PT', 'Professora de FAI'],
      respostaCerta: 'Professora de empreendedorismo' 
    }
   
    


  ]);

  //Estado com os valores iniciais
  const [pontos, setPontos] = useState(0);
  const [questaoUsada, setQuestaoUsada] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(null);
  const [modalConfirmation, setModalConfirmation] = useState(false)
  const [visButton, setVisButton] = useState('none')

  useEffect(() => {
    setNextQuestion();
  }, []);

  const setNextQuestion = () => {
    //Pegando a próxima questão duma forma aleatória
    const questoesRestantes = questoes.filter((q) => !questaoUsada.includes(q.id));

    if (questoesRestantes.length > 0) {
      const randomIndex = Math.floor(Math.random() * questoesRestantes.length);
      const proximaQuestao = questoesRestantes[randomIndex];

      setQuestaoAtual(proximaQuestao);
      setQuestaoUsada([...questaoUsada, proximaQuestao.id]);
    } else {
      // todas as perguntas foram feitas
      setQuestaoAtual(null);
    }
  };

  const checkAnswer = (selectedOption) => {
    // faça o que for necessário para verificar a resposta selecionada
    const resposta = questaoAtual.respostaCerta;

    if(resposta ===selectedOption){
      Alert.alert('Resposta Certa!')
      setPontos(resultado = pontos + 2)

      //Se já arrecadou 24 pontos então vá para a 2ª fase do jogo
      if(resultado == 24){
        
      }
      else{
        setNextQuestion();
      }
        
    }
    else{
      props.navigation.navigate('Home')
      Alert.alert('Resposta Errada!')
      setPontos(0) 
    }

    
  };

  const respostaAjuda = () =>{
    const resposta = questaoAtual.respostaCerta
    Alert.alert(' ' ,'A resposta certa é ' + resposta )
    setVisButton('flex')
  }

  if (!questaoAtual) {
    // todas as perguntas foram feitas
    //return <Text>Quiz completo!{pontos}</Text>;
    if(pontos == 0){
      return <View style={styles.containerLoading}><Text style={styles.textLoading}>Processando...</Text></View>
    }
    else{
      return <View style={styles.containerEnd}>
              <Text style={styles.titleCongratulations}>Parabéns!</Text>
              <Text style={styles.subtitle}> Você terminou o jogo com êxito obtendo {pontos} pontos.</Text>

              <TouchableOpacity style={styles.buttonPlayAgain} onPress={()=>props.navigation.navigate('Home')}>
                <Text style={styles.textPlayAgain}>Recomeçar</Text>
              </TouchableOpacity>
      </View>
    }
    
  }

  return (
    <View style={styles.containerQuiz}>
      <Modal
        transparent={true}
        animationType='none'
        visible={modalConfirmation}
      >
        <View style={styles.containerConfirmation}>
            <View style={styles.windowConfirmation}>
              <Text style={styles.textConfirmation}>Tens a certeza?</Text>
                <View style={styles.containerButtonConfirmation}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate('Home')} style={styles.buttonYes} activeOpacity={0.5}>
                    <Text style={styles.textBUttonYes}>SIM</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>setModalConfirmation(false)} style={styles.buttonNon} activeOpacity={0.5}>
                    <Text style={styles.textBUttonNon}>NÃO</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>

       <Title/>
       <View style={styles.progreEstatic}>
        </View>

      <Text style={styles.pontos}>Pontos : {pontos}</Text>

     <View style={styles.containerQuestao}>
          <Text style={styles.questao}>{questaoAtual.questao}</Text>
     </View>

      {
       
      questaoAtual.opcoes.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => checkAnswer(option)} style={styles.respostas} activeOpacity={0.5}>
         <Text style={styles.textQuestoes}>{option}</Text>
        </TouchableOpacity>
      ))
      }

      <View style={styles.containerHelp}>

        <TouchableOpacity onPress={()=>respostaAjuda()} activeOpacity={0.5}>
          <AntDesign style={styles.buttonCerta}
            name='check'
            size={30}
            color={'#ffff'}
          />
           <Text style={styles.textCerta}>Apoio1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>Alert.alert('Informamos que...', 'Já utilizou o seu apoio1')} activeOpacity={0.5} style={[styles.buttonCerta2,
          {display:visButton}
        ]}>
          <AntDesign style={styles.buttonCerta}
            name='check'
            size={30}
            color={'#fff'}
          />
           <Text style={styles.textCerta}>Apoio1</Text>
        </TouchableOpacity>

        
       

        <TouchableOpacity onPress={()=>setModalConfirmation(true)} activeOpacity={0.5}>
          <AntDesign style={styles.buttonDesistir}
            name='close'
            size={30}
            color={'#ffff'}
          />
           <Text style={styles.textDesistir}>Desistir</Text>
        </TouchableOpacity>
       

        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign style={styles.buttonAmigo}
            name='user'
            size={30}
            color={'#ffff'}
          />
          <Text style={styles.textAmigo}>Apoio2</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export {Quiz}
