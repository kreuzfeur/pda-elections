import React, { Component } from 'react';

import { Chart } from 'react-charts'
import './elections.scss';

class Elections extends Component {
    state = {
        languages: [
            { name: "Навальный", votes: 0, src: 'https://lh3.googleusercontent.com/proxy/gb7dWue_4FSPTWEcIQqnwH8RFugwwjQbAJcMNdb2y3sPI3slnmbpz2RIloNufN_MI8slKpp04h3MeumavWZaYCfp4XpftfL2R965IrXtkS708QFi6kdECrxkc0_N3kKGToxh3WOqV6H1G4rcgFTk3A' },
            { name: "Летов", votes: 0, src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFRUXGBkYGBgYFxUXFxoZFxgYGBsWGRcYHSggGBolHRcYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrLTctLSsrKysrLSstKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQAGAgMHAQj/xABGEAABAwIDBQYEAgYJAgcBAAABAAIRAyEEEjEFQVFhcQYigZGhsRMywdFS8AcUI0Ji4RUWM1NygpKi8WOTJENEVFXC0hf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4KKKIIooogiiiiDXWqhrS4mwC5p2q7TF7/AIbSR03D87077edoBSY5oMkWsf3jo3quU7Q2gADJl7tfsgMr468zJm3Nx/Pol+JxsB0HTfuzc41E3jkh3uOo/c15uIkn1hLdp1iGNbxGbnpAnnr5qq1MrlxMm5vPrfwCwqVYvwv/AJjp5fRYUzzm8eDbH2jxWnEulut9TzOiDfge+6N4ujXVDJ3wIAvpwjwKF2QyLneY8pPsttDFd94FgQRAOkBBrw5kkuAAmY38dJlE4J0uBsL85gyYHBK2YktY6LZj03oui3JTc4eeszoB+d6Cx4Atg1Hd7fewPBoG88+i24IPr1Zdui26TeBwi3lzWFCkW0myInQcvsB6lWjsvg5IJEXnT88fRBeey+zhTY2Rci/VWgJXs/5QmQKCvdquzgrsc+l3a2Wx3P8A4XDf1VK7DbRdh8RkquNMHM11N02cLSPEBdYlUjt12czubiqQ77DLxHzN/EP4h6qIuwK9VX7JbcFRgY+zhpO8cCrRKCKKKIIooogiiiiCKKKIIoovC5B6gNt48UaTnHXQdSji5c2/SJt9jmDI45QJEgiXE5W+xPgEFG7S7T+JV1lrJJ4lxmXc+CqxxJc8uIkN95P1le4yqQJOpJPkJ+q0U2WaPxOB8oA9iqourULWNG9xk9SZPrZe7Xrg1TLflDdOV9FrxF6rW8I84WnaJ7zyTx+yDTRbYAEEgCdx3Em601HwMxgcN58h0XlB3zDeQR0E3WgtLvD21QNcI/ucov6obBP78HUk33XH8giaQikTzj0QFD5mn+Ifn2Qaq7b5NIKc4GmX1aVITvcelrny90rrPhzxrJHmVaOz9H9pYXygEzyn8+KBrjaozRG4QOA0jz9leezeHhonfCo9KjmrC++T9PSAr/2aqd25kSRzQWrC7tyZgKidqKzziMBh2OIFSvmfB1ZSaXlvSQAr0x+6EGYXjmgyCsoXiDnfajZRoVczPlJzN5G9ul1b+z20/jUxOsLHtTgvi0HAai48Em7H1MpLTqInxEKIuSi8C9QRRRRBFFFEFedgtojTFUH9aLmez3L3PtID5MMTuh9SPWmIVgUhBVsUNpvY5hZhm5gRmFWoCJ3juajVUftRtLaVL4eDqkOqHvU30y6XgS3vZYOtjIC7AQlGG2c79drYh0Fpp06dPiBLnVOknL5IOQbDx+0mVagqNqNORwb8QvFMusYk8jHRKe0W3qndp1qOHOkQ+obXG4cvQLr36Sajf1drC4BznEs5kMcP/sPNcB7S4jNWaNYAEnWZ+0qqZNx+HdDXYFjjH/l4iu3fvabblk7FYY1GNODqB7bty14tciQWkfvFKqLW/EAg3H2Xran/AIsmbQQPM/ZAdUq4b4ji6jiQeAfTMf7V5jq+Dg5m4lgIvLabjruOYJXtD53Rrca+S3bXYRTjWY+p+qDIOwIjLXrA7w6iweOYPKybszDlsMxtKSZ77KlM+zh6pCzSco1m87tES05otJ4+Og5oLJT2Q51LLTq0XRwqsFo170eyCo7BqTlDqcwD/aU/eeilLDtIa0tbcATGhMx6whH4dodkI/cJ03gx7wgLxOwanxJAYQSDPxGHyE2Vn2Fs91NtV9QtDnEx3mG0AbjyVGwVEvqta1oMloIidQb+itmM2Vh2kAUm2ETvJAvp4IJha5pYgOqCGVCALgwR42srbsbtfhKRLHPOpMgSIJN5/wApVPwfZqg9pBZDiLO3gmY38IQX/wDPaouMUzhdrha/CeKDpOxsezGbW+K0n4WHwwDCREvrGS4cYAA810Wniua4hsfZdP4bHnF1qFQMa39mWZO6BfK5pJ14ouptCoz5druOnzUmn2eg7jTqSLL0Bcb2f2lxxszH0D1pEe0wrNsvaO1XCW1cHW5d9hPogvFYA9075CoNXHmhiOQdfmAZR+I2rtZl34Cm8D+7qifcqj7b2wHVs1WlXoPkktyNeJ6hw3Sg7ZRqBwDhoRIWao+wO21AUWNyYh+URmFF8FNafbTCkd41Gng6m8R6KIsairzO2uBP/qGjrI+iLpdpcI6IxDL80DZRBf0tQ/vqf+oKIDVFFEEXi9Q+0MR8Om9/4Wk+QQcd/S5tvPiBSBtTaQP8R3+C51iKrargHQHC07ncJ9brftLHfGxjnkyMx8Zk/QJM98PdyAjqqpi9hbVbPC/XrwQtOpNc2uD6SfutuDx0lgdcQBfVRtMBznNnU9dUExoJqEcSPMgfVbdviAG8AUayh+1a87oIHOLu5xr1Qm2mW8CT1ddBV2VOqOwYzFjRqXXS54hMtg0zm01MNnWfzA8UDXEYmHC/74H+n/hEY4DMHjeCPAkH3A80sxn9o4zanPQm49SmeComoKIuZbPQSL+iBr2UwoYHVXDRtuR0HoY8SvcNifi1yNWiP5nzU7T4r4NAUWiH1DmdeCG6AeZPmeAQWw6gbDo5TxMXQP6WJAeVntLakMtql0anmUr2hXIF0Am3MW4ZWgn5GSBzGir7xUdafU3R20Me35iJdAAHS0pQ/FOJufKyB1ssPa4HNEfxfT/ldO7J7YqU4JJiwm32+q49QY07gfEg+aaYGo+mc1GrUpO4ZpHSDYhB9OYLajqlKTBtu1XOtuVP/FAGZMn0jTjqhv0c9uw54w2JAp1XWa4WpvPCP3XWWXbaoG4ymBrlzRviSJQdA7BYiz6XANI9ZVrcwHUA+C5/2TqluJZOj2x+fJdBCiNZwzPwN/0hD1dk0HfNQpnqxv2RqiBV/VnB/wDtKH/bZ9lE1UQRRRRBCq529xraeEeHODQ+GAni7/gqxlcZ/TdtXO9mHa6zbkc4/mg53W2Y+jWGbfJnXXSDvEJDj3Qxx3k+1lYdlbacA5tTv0wIE6ieB8ENtPZzHsBpEOBvlJgzy4qqU4d0OZPAew+6a7GwpdUk2aHGRxIMgfVL6GDcHttGWJ4iwEkeCdbMfcn90Ax4kjz4lAa0B5neQBI4A8Er20z5ovM6dE3pUoZmN59zPpdJsbmJOXcLkeqCu02AmHWHqmWEs9uUXsG+clx9IQ7aIBGbvcJEeMraMUGtOUDNBvM9I8UHm0WzFNly5wzddw6BXjZODbRbnfYNaGjoBPvdIezmyhSH6xXtvY069SgNu7edWrZAYpiwHEneUGztBicz3u1Lm+UaALbs6oQGA7onqdff0QO0DEHWFlgvlnfI+6C7YbaGHILS+HiQQQdVVO0T9SNOKwxnZ/FPfUqUgHNzF0D5vAEKu1sTUgtcZgkEOFwRuk3QDPcSZKxWT3SsUHrSmFDFFxE2I0KDw9IuNlYsDhWADMAT7IPThDVaA2zhcEWIPEFP6+1X4k4eq89+mz4VV0gnO02PIOaUCALABVXH0j8V4aCbmwBPoEHc9hbWa80nMeD8N4BhwMZuMdCuvNMr5Y/R4alN1WWOa14ZBIIlzHbp5PK+nNkV89Gm/iwH0UQYooogiiiiCKKKIB8diMjHO4adSYHqV83ds8X8XF1XAyGktnxufFdy7dbSFHDvdPyttze6Q3y18l87VXS0uO9x8Y/JVUAdSBwJ+yAr41zHd0wQI5f83R9eraed+bWj2lIHOk9SguuB27mYc8EgtaZbmH3TnBGi9pytDTMHLceRuPJUXBGczdDM+QVq2JTzSQNCTy5FA/xdLKwWBid43WVZ2jQqmQykTb8Q180y25WDYbNmAT1jRU3F4l29xmTME670Bz9j1CZqOyDfmc2fJFYZ1Gi1z2gPI3kW8OKrlNubffiToN5us8XWOTL+7aPBAbjtqvquLnG24dbJVh2HOJ3XW7Dg5eJ3dT9lhVdl/wAW/qga4gTSzcvrC2bOMt8V5lBwx5A/n0XuyiCwx+dyDp3ZBocPz1VG/StsP4OIbWaIbVEHhnbb1EeIKunYWoM5HT6Jx222GMVQfTNnG7DwcNEHz45nBYBGvw7muNJ7S1zSRBtcbpWBwjjqMsa5jCDGk7mrJs1wgW/mq/SDWGSZ6aIyniSTMwOHBBYnVZO4Ab077A7KbUwO0MTUiKpYxhNvkdmlp4l2Uf5SqfSZUxNRuHod5z/mI0a3e5x3AC5K7F2d2Q11JtBgP6tQY4gxAqVAD3+kkkIKZWfkq0QNAHg3sTIB9QV3HsbVzYSnykeTiB6QvnxlaHMBBlrW9O8Sfsu2foxxufDvYdWOB/1DT/b6qIuSiiiCKKKIItdeqGNLnGABJ8FsVY7TbQaWuaXFtNl6juMXyN4mYHVBzf8ASxttzg1u9xzATuNgue16ZApt4ADx1Kcdo8S6tWNV9pJyibAAE+ggdUoxBlz3fgbbqYA9T6KqUbSrAEjd8vgNfVKAL+KLx4giT4IenGYdd6A7COgt0u6POVfOz9GGOPAT5qg4B0va2B8wXS8K3JhyTq4kDoEFdx1bPVy6wZJ5wQq7VonON8SPEzdPC8fGY0G5Mmx4HeleJpAVbumHaDddAqqE3G/hyWT6LsoAnimmFw4qSMxmbRp4obaFKowBstva1j66IMKXdbY3MAn7ICs/dzRFNpFjrP3QdUXQWTBycO8DewrXsU2HOERshpLI4scfWELs0Rl6oOl9h7vPI/ZXvadK3gqd2DLBLiYlXl+IpubB04oOadptk06klzLm8xv5HiufY7ZFRps4VANM1nea7ltTHYVgyPIJd+7ImOIVNxuzWGo4NMt1B5FBzJuzav8AdPPkU32f2YqPGZ7RRZIkl0vPRg+sK8YXZXAJzgNkQ4Zt2nJAB2W7MtaMjGltM3eSe/U/xkaN/hC6TSaKdJzGAfKelh7AILA0gwaLZXqdx54NcT4AoOF/HLnPcLEOczeJDTb39l1n9Edcl1QE2NNrvWFxrZdQ3kySSSJi439L+y6/+h59zcTlIieYP0QdTUUUURFFFECvaeOIIpMPfcJLtzG73ddwXPdvY0Yh/wAKmS2hS1cNXOG/m4nTqU12ziXCaFN01av9o+/dB3Dwt6qq9oazKDPhsPygzxLuKqqTt/ETUDBpMHkJ/Pol+OHcd/E8eQE+pI8kBtOoS8DeXSfsmO0RNPNw73p90FUxjpeVjh/mCwfqtlD5ggYbKE16YA1drqefsr32kxOSlTaLanzVT7KYTPiA7c0E+JsPqrN26N6Y3AD0FkCnAMHx2HeQb+CW7Up5azp5H2lG4AnOxy87R0v2rXRYi6DDYlP9o7hm9wbKbbofL1EeYXmznRUE6GJ6j8hHbebYH+Ie4QV8Mgn87ktqtunOIZc9P5JS/wCcdUFk2G23D9m/3kLRhqeVjTvlEbGEMzcnD1W1tGKIG+Y9Pz5oGHZjbzWth2vDzTvF9oqwpn4JBfFpmAOg1VI2ZgCST4+qtXZvDgkygTYHB1nVviVnF73aHdHAcAr6/BltM1HGIEkncBvWzYWDbLqTh3qZsf4TcIntwzLs7En/AKZHnAhBNkVWuggyDv3FP6dKyr+BwBp0qRbpkbb/AChPcFWkQUBtMncs8YyaNUcWOH+0rX+sMYJc5o6kBLto9p8KxpBqt0OnRBwDZVWO6dWg+Nzb88F1H9GG0Q17XjQxPmZB56rn1DZ9PMT+s0miTrOmYkbuBjwTTs/jaOEqvArh7X3hjXGCDIIIOv3QfULXSJXq4439J+IYxlOnRDpIY2pVDmNmN8uHqFaWYfbVcAmrh6APBzqhgjUFgaPVRF6UXPv6n7U/+Yd/2nf/ALXiDVjHDCUnFxzV33cd8u3DhwXNtvYkmS4gGJPL/j3Vr2ztPO51d4tJ+Ewnn859vRcv2/jjUcRqCfMqqXUj8StO5t+vCUwr1oa5hPzRE/iHtNwvNk4aAeknqf5Jbt6v3gAgV12QTaOXDkt2Hp/KeqJoObUY6QDUA7pmJ59Ux7N7INUgusxhJcTu11QN9jUv1fDGsfmdZoPv+eCz7b1ZFI8Q0+YH2Snb+1/iVmsZakwZWgdNU07TU/i4OlUFy1oB5EIFeAq/L1+qYbfHdpnjb6qv7GqTI5yE+22ZosfuDmnwm/ogAwR9E121emDzaldIQSeBKZVe9SaBe+mtkCvG2PX7JO9lx1VixGz6jwMrSSI4fVacVsCqIBAEm0uaPqgO2Uz9hU6uHnJUx0tawcZPsiMOwUaRFSozMXAwHBxMACIC0bR2hh7ZhVdaQA0M4yJdqEDHZNJuU3AJ5pzsOkKT81Qjz1VBbtiJyU2N4F5LyB0kBejHGp36mIIjc2GeQCDo3aXb1LDvp4ikQ8kFr2TE2kFVLb/bmriqbsOclOk+xiSdzgJPMKuV/hVHA/FcAImXOJPiTZFbOw2Eaf2oc8cQ4gb/AMKDo+F7U4iswNo4F5FgC4Ecpl0BQbN2lUdD6rKLZ0ALnf7YCA7Ddppig585LNJgEs3TzG9dB+ICQ4IK+OwdJ8GviK9XiMwpt8mifVG0+zOEpDuUGW3ul583ynTqltUBjsTlYeiDgHaQBmJfl/EempsvcFWu0i17cuXotHaGtmrvduJPqUFRqQg6e5gxOHLLy4SCD3g9unju6FWT9Ffb00yMHi3QAYY42y8I/gPDd0Nue9l9qS7KTc34aa+MLDtC0sr5m238e8DDgf4T9UH1VHTy/movmH+tNf8AFV/7zl4gJ7RbRJmTff8AYc9yr9WiRdwgxpwT6jgPmrVQ4taLcM5ggdUtcJJcdPrwQZYcZKZO/wCpSDC7Oq4uv8OkJdBN9ABq5x3AJxtVz8oY1rid+VpcZ8PLxR+yNnOp4UMcx1J1R01D/wCc9g+WkPwU95m5MbhcK3gNiF1QgvAYw96oD3YG8HemW1NstdT+DSJZTBALvxx+LzXm1sJVeRSHw6FLVrXvDZP4nRqUDX2dQY0ZsU1x3tpifXRAPXpBhbeTMA7gP+Ey2XtMB3wKhmnUETwJsvBjMGxsZKtWb94ho0iyEftMx+zp02ye73ZcByKDfR2aKNQlzrA2A11tPVMamIpVKIbLg2bxffr13QkuPxReGh/zZR3jvsJB8UTSphjSCDp4Qd4QH4euwlzaVPMYnNUOvPKNVmzE1T3HVMg4MaG+uqF2QcldvBwt4jT3Tfa+CjvN0J9YJQLcZgmgTed5LnE+6XmhmbYXF+fNN3uzNj94eoQTWQ786IDtk02inUsAWlpmBMXQW3Q1z6QcTGX2cQfp5pvhGCDGjoHvZKtq08wZxa4jzA+yDXg9gNqXlsTfXRGUOzbA45iI3WndvWrDMNMWO5ECs8+KCwbP2Xh6TQ6GuMQQfQiLiEzY+llyfDaATe0683SVW8ECVYtn0haQgx/q9TY8VmNh1/8AcbnqrTgsT3UCKkiFjTdG9AzqYuyrPa7a4p0XEHdA6lF4nFwCSVzLtZtX4tUMBlrTJ6oK9jj3z1Q6zqG6wQE4OqWHMNxTrtFiy9tN7TZwHtB9pVejRHPqThmj8Lz6goMf6SqcfQLxByog63t7aLKxp08PSFSmy+UPI6uMDvOPJLcTXe1l20sMBwBfU/y5vqF7tPENYO6MpjUWcfFVfH49zQJcXcnX8JKAqt2tqtaW0nvAAvUdd/gNAVXquOqOJLqjpOtzfqj6tfDPEOYabuLDInmCpgthGp8tRjm62nPA3BvH7IF1NhMEySTaeHGV7VaAZ5WHFMq2CN4kluWWkQ68ycp03LTQoZqveENAzO6D8hAFiKZYQHakSeQO5Z4bE5GugSdxO7otWLxGd7ncT6LymfW32QZteXtINyJI48wjdm4wluQ3jTjCWUn5XSFtccjpHh9kDc1gCwg3bu36yFZH187G6ajygz7qoPIMPHii8DtKHZDb2QOsVhy023aH6IetTkTCZ0azajUC1sE77oNmz6mXoR7LdtDDTfcYIIWNCjKMw75bld6+SAH9TcdAdyzoYCpOllYaDLDwR1Ci1As2fs11rXTelhXDdCZYQttZHNYECr4NkNiCGt1TfFENBVF7U7bawG90C7tTt3I0gHvGyoYebuOp+qyxeJL3FxWOWw8Sg1uXi9K8Qeotw/Y/5x7H7rTQpZluxT7ADTX6X8kAkKIj4Tfxt/3fZRA/2jjrlxNgfElV+rXL3T5DgEd2hpZapaDLLOYeLTo7xCWMMX6oJElH4FkZdxceOgHCN8+yCazejW1crnH8LYHU6fUoPcVjD8RzgSSeJN43z1TOmfi0jLwwueGS6ws0TJG6wuq8Amm1iG0KFMWdBe7qdEAmO2XVpXczu/iF2noQhabvst+H2jUYIDjl/CbhGjGYep/aUyx251PTxabIhXVW1hzMjgmX9AVHtzUnNqjgDDx1afolWVzHQ4EHQgiEVtwdWDlOht4rZiGw4Hfohnj8+yLrHMwOGo16hBlh9ouZfwKsOBxDXNmb6hVF+vIo2hXIYI1vHVt4QWyhUgjgdeR4o5rwdfzzVXwG0swE2It5pnSxW5A/w2IymCf5pgzFAXVTq4waytmH2mD3SUFvZjhxW5m1cu/zVLxONLBMyOO9J8X2iI0mUF02/wBpWtab+q5ftLHuquJJtuWvGYx1Qy4+CHQZU2SQF7VdJW6mMrC7ebDlxKHIQeL0BQInCYfM6Lwg3YemW35enFa6VFz35d0xPJGYsuLvhsiwvy6ncB9VrGJDGHLc6TvJiCf8MWCAn9Tp/wAHmok1+fmogY0nfGpZD89IEs3yzVzfA38Sl9PX6ei3YIua9rm/MDI6b55RbxKzfEuy6Gb7+SDFo5XHuFsriQTxIPWVC638VpW51KQLQNw5IAmjQ7pWza2JD6kjQAAeCxxNrBDZUHr6ZABI1EjmsEwxLf2FI8C8esoABBtoV3MMtcQeRTWltwxFSmyq0/iEnz1SVZNO5A8nBVXNAz4Ybzes2f8ACYPqth2E5rXGnVp1m7sph3i111XiIWxryIIMIN2NwT2GHMLeoiR13rGi8x07w8PuPZHUdu1m90uD28HgO91twww9T5mupu/Ewy3nLDoOhQLS/K48HfW4PgjqdYuEg95vsvcXskCIrU3M3OBIN9BlN51XgwNRrrQS3eN8idOiCNqufZupgX/PC6AxVSHQ02EiePNOG0stMv0e+wHAbz5pHUpHegKo7TfGVxkIJ8TZQtWMIIFuw1DM4DdvK1hiLqH4bco+Y/Ny5dUGvGVgTDdBYKCgIBve3jErzCUQ50HT7I3FNApthsEm149D0QLzRM2v0+yc4OnkYSdR6HhK82dhbtGUk/iO5H7SpaAjutvY6nibXQJMVVDRAuXXcdC6fZvLehaVFziABJKZ0dkmo6SHCeMegVr7NYRrXdxozNF566IKr/VvEf3dT/Sout/rzeCiDlDcGGsJBD3HWCLDgENRwNQuP7N/+kxrxCGr15M7+X3WTMW5mlR46OKAsYXKe8wzroQPMrVi8ZchpE8foF4Nt1/713iV63a9Y6vmRvDT9EArogbjvlY16RsRB8UU3FvLtGTxNNh+i1u2i8OtkHRjRPog2ClNDLIJD5sbwQtJwDpiw5zYWmSeC9djXODiTJkRu9loGLeDIcQUDBmHw4ZDqhL9TkE+AJQzq1No7tLxeSf5ei1VMZUJu4nyWIxjx+8UGsmRzCwRg2k7eGnq0H6KfrbD81Jp6SPYoBHFZUqpbcIkmidz2+MhT9Xpf3p8kG34zXiPlduO4qYWu8OykmTA+k+SHdRp/wB56IvDRBOaS0cCEDl+Nwry8VPiNeLBzS0sIAES03CB/oV1RpdSqMqj8M5XDwOqWPpNv+115H1XtOiBdtYA+IQasVhH0zD2Ob1B9DoVoKeYTG1WiPise3e15keoWVf4BId8MUz/ANN2Ydcp9gg0MtQzZe8y08Gu3lKcysezqDJfNdrmVGuaR8rgTo6OIKEZshzYdBM2mJEkcudkGnZVENDnuMWsN/kmVCrTyyWhxEG94+k30S12GqE5chgXgEEnqUdRwThDLho+YxYk3seAHugNpYx4Yah7oNmtgDx0UzZrvMwJjdPPmFor1MzgBZrQl36w4k7hu3dOqB2MaYsIvGYjWx0G9Ntj1cgMakyTzVYp1szNSXTE+G7gEZsfFGYJQW3+kTwC9SyevmogoL9Ah36r1RB4PmRFHU9FFEGyj8/gUM/VRRBGfI7qFpUUQZv1WJUUQeL0qKIiLwqKIIjMJ/Z1OgUUQaqP0Wp6iiKxWf8AJRRBnT+YfnirH2e0P+E+yiiDLafzeKP2fofH6qKINmN+jvZIm/u9B9VFEBOC18T7LZsz5lFEDxRRRB//2Q==' },
            { name: "Путин", votes: 347, src: 'https://icdn.lenta.ru/images/2020/01/31/04/20200131044815775/square_320_58c08a36ed004c1bccbefe85111549d8.jpg' },
        ],
        voteState: false,
        message: ''
    }

    vote = (i) => {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;
        this.setState({ languages: newLanguages, voteState: true, message: 'ваш голос учтен, дождитесь окончания голосвания' });

    }

    render() {
        const data = [
            {
              label: 'Путин',
              data: [[0, 1], [0, 2], [0, 347]]
            },
            {
              label: 'Летов',
              data: [[0, 1], [0, 2], [0, 3]]
            },
            {
                label: 'Навальный',
                data: [[0, 1], [0, 2], [0, 3]]
              }
          ]
        
          const axes = [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: false }
          ]
        return (
            <div className="votes">
                <h1 className="title">
                    <div style={{ width: '100%' }}>
                        <span className="first">POLYACOV</span>
                        <span className="second">ELECTIONS</span>
                    </div>
                    Образец интерфейса электронного голосования
                </h1>
                <main>
                    <div className="languages">
                        {
                            this.state.languages.map((lang, i) =>
                                <div key={i} className="language">
                                    <div className="voteCount">
                                        {lang.votes}
                                    </div>
                                    <div className="languageName">
                                        <img src={lang.src} alt="" />
                                        <span>{lang.name}</span>
                                    </div>
                                    <button onClick={() => this.vote(i)} disabled={this.state.voteState} className={`${this.state.voteState ? 'disabled' : ''}`}>Голосовать</button>
                                </div>
                            )
                        }
                    </div>
                    <div className="charts">
                        <Chart data={data} series={{type: 'bar'}} axes={axes} tooltip />
                    </div>
                    <div className="mess">{this.state.message}</div>
                </main>
                <div className="footer">
                    <span>d.polyakov</span>
                </div>
            </div>
        );
    }
}
export default Elections;