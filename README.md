# portfolio

Esse projeto é a primeira versão do meu portfólio.

A proposta é criar um portfólio com design mais ou menos minimalista (já que possui alguns ícones e alguns efeitos de animação).

Foi usado nesse projeto o padrão MVC para o consumo de três API.

A primeira API consumida serve para requisitar a um servidor os certificados de qualificação para automatizar as qualificações. Desenvolvi essa API especialmente para servir a esse projeto: [API de certificado](https://github.com/emvalencaf/APImeusCertficados).

A segunda API consumida é a do Github para navegar entres repositórios. Como a API do Github possui um limite de 50 requisições (não autenticadas) a abordagem é economizar a quantidade de requisições feitas ao máximo.

A terceira API consumida pelo projeto é a google api - especificamente oAuth2 - que é consumida no back-end do aplicação para que seja usado um e-mail gmail pelo servidor com as informações extraídas do DOM do cliente.

O back-end foi desenvolvido usando um padrão de projeto similar a do repository, em que há um controller e um service. No caso, o controller fica responsável por fazer uma validação dos dados da requisição do front-end e chamar o service que instanciará a consumirá a api do google e instanciará e acionar os métodos do nodemailer.

