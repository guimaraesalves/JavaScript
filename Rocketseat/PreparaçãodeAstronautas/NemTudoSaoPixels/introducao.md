# Valores e unidades de medida

* Cada propriedade possui valores `property: value`
* Estudo constante a fim de entender as propriedades e seus valores


## Prática

* Como conhecer e estudar os valores na documentação?
    * `<color>` `<length>`
    * Os termos podem variar. `values` ou `data types`
    <hr>


# Tipos numéricos

* `<integer>` Número inteiro como -10 ou 223
* `<number>` Número decimal como -2.4, 64 ou 0.234
* `<dimension>` É um `<number>` com uma unidade junto: 90deg, 2s ou 0.234
* `<percentagem>` Representa a fração de outro número: 50%

## Unidades comuns

* `<length>` Representa um valor de distância: px, em, vw
* `<angle>` Representa um ângulo: deg, rad, turn
* `<time>` Representa um tempo: s, ms
* `<resolution>` Representa resoluções para dispositivos: dpi

# Distâncias absolutas `<length>`

###  São fixas e não alteram seu valor.

 **Unidade** | **Nome** | **Equivalência**
 ------- | ------| --------
cm | Centímetros | 1cm = 96px/2.54
in | Inches(polegadas) | 1 in = 2.54cm = 96px 
px | Pixels | 1 px = 1/96th of 1 in 
<p>

* O mais comum e mais utilizado é o **px**
* Não recomendado usar cm.

# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamno da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

**Unidade** | **Relativo a**
----------- | --------------
em | Tamanho da font do pai.
rem | Tamanho da font do elemento raiz (root/html)
vw | 1% da viewport width
vh | 1% da viewport height
<br>
<br>

# Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias `<length>`
* Sempre será relativo a algum valor.


# Posições

`<position>` -> valor

Representa um conjunto de coodernadas 2D:
- top, right, left e center

* Usado para alguns tipos de propriedades
* Não confundir com a propriedade `position`

# Funções

Em programação, funções são reconhecidas por causar um reaproveitamento de código.


* rgb( )
* hsl( )
* url( )
* calc( )

# Strings e identificadores
* Strings: Texto envolto em aspas
* Identificadores: red, black, gold;
