# Configuração Inicial

Essa configuração você fará apenas uma vez por computador e o efeito se manterá após atualizações.

Você também pode mudá-las em qualquer momento rodando esses comandos novamente.


## Sua identidade

Assim que instalar o git, abra o terminal e digite

> $ git config --global user.name "Seu Nome Completo aqui. Entre Aspas"
> $ git config --global user.email seuemailaqui@dominio.com.br

**Isto é importante porque cada commit usa esta informção, e ela é carimbada de forma imutável nos commits que você começa a criar:**


Se você quiser substituir essa informação com nome diferente para um projeto específico, você pode rodar o comando sem a opção --global dentro daquele projeto.


## Editor
Você poderá trocar o editor padrão, que é o vim, por outro

$ git config --global core.editor "code -w"


## Ver configurações
Você poderá verificar suas configurações com o comando abaixo

git config --list

exemplo:

(base) mateus@hank:~$ git config --list
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
user.name=Mateus Guimarães Alves
user.email=guimaraesalves45@gmail.com
init.defaultbranch=main
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true

> git config git config --global core.bare true


> ## git config


* Permite ver e atribuir variáveis de configuração como nome e email.

* Estas variáveis podem ser armazenadas em três lugares diferentes:
	1. /etc/gitconfig: valido para todos os usuários no sistema e todos os seus repositórios. Se você passar  a opção *--system*  para **git config**, ele lê e escreve neste arquivo.

	2. *~/.gitconfig*  ou  *~/.config/git/config*: Somente para o seu usuário. Você pode fazer o GIt ler e escrever neste arquivo passando a opção *-- global*.

	3. *config* no diretório Git (ou seja, *.git/config*) de qualquer repositório que você esteja usando: específico para este repositório.

Cada nível sobrescreve os valores no nível anterior, ou seja, valores em *.git/config*  prevalecem sobre */etc/gitconfig.


































