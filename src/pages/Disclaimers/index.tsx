import styled from 'styled-components'
import React from 'react'
import { Text } from 'rebass'

export default function Disclaimers() {
  return (
    <Container>
      <Text fontSize={20} fontWeight={600}>
        Open Source Uniswap Frontend - Legal Disclaimers
      </Text>
      <br />
      <Text>
        This open source Uniswap interface (the “Interface”) provides a means of access to the Uniswap V2 Protocol
        (“Protocol”) on Zora Network (the “Network”). The Protocol is a set of open-source or source-available
        self-executing smart contracts initially deployed by Uniswap Labs. The Interface is distinct from the Protocol
        and is merely one means of accessing the Protocol. For more information about the distinction between the
        Protocol and Uniswap Interfaces, please see{' '}
        <a href="https://uniswap.org/terms-of-service">Uniswap’s Terms of Service</a>.
      </Text>
      <br />
      <Text>
        This Interface is completely open source, with the full repository available at
        https://github.com/ourzora/uniswap-v2-interface. The Interface is provided solely for your convenience - USE IT
        AT YOUR OWN RISK. Neither Zora Labs, Inc. nor any other third party manages or maintains the Interface. Third
        party developers may contribute to updating or upgrading the Interface.
      </Text>
      <br />
      <Text>
        By using the Interface, you represent that that you are at least the age of majority in your jurisdiction, and
        that you are not (a) the subject of economic or trade sanctions administered or enforced by any governmental
        authority or otherwise designated on any list of prohibited or restricted parties (including but not limited to
        the list maintained by the Office of Foreign Assets Control of the U.S. Department of the Treasury) or (b) a
        citizen, resident, or organized in a jurisdiction or territory that is the subject of comprehensive
        country-wide, territory-wide, or regional economic sanctions by the United States. Finally, you represent that
        your access and use of any of our Products will fully comply with all applicable laws and regulations, and that
        you will not access or use any of our Products to conduct, promote, or otherwise facilitate any illegal
        activity.
      </Text>
      <br />
      <Text>
        To access the Interface, you must use a non-custodial wallet software, which allows you to interact with public
        blockchains. Your relationship with that non-custodial wallet provider is governed by the applicable terms of
        service. Neither the Interface, nor any developer or contributor to the Interface, has custody or control over
        the contents of your wallet or has the ability to retrieve or transfer its contents.
      </Text>
      <br />
      <Text>
        <b>Disclaimers</b>
      </Text>
      <br />
      <Text>
        By using the Interface, you acknowledge and agree as follows:
        <br />
        <ol>
          <li>
            INDEPENDENT LEGAL AND FINANCIAL ADVICE - Nothing in the Interface or Protocol or otherwise provided by
            developers or contributors to the Interface, is intended to be legal or financial advice. Please consider
            consulting a lawyer and a financial advisor before proceeding, as use of the Interface may implicate tax,
            regulatory, and other considerations. By proceeding, you confirm that you have either received independent
            legal and financial advice on this issue, or that you understand the potential risks and have consciously
            chosen not to obtain such advice.
          </li>
          <li>
            OPEN SOURCE AND THIRD PARTY SOFTWARE - The Interface is fully open source, and such software is made
            available to you under the terms of the applicable licenses. Please review the applicable licenses for the
            Interface <a href="https://github.com/Uniswap/interface/blob/main/apps/web/LICENSE">here</a>.
          </li>
          <li>
            NO WARRANTY - By interacting with the Interface and the Protocol, you acknowledge that the Interface and
            Protocol are provided on an “as is” and “as available” basis without warranties of any kind, and that the
            Interface and Protocol may not meet your requirements, may not be current or error-free, and that errors or
            defects may not be corrected.
          </li>
          <li>
            LIMITATION OF LIABILITY - In no event shall developers or contributors to the Interface or the Protocol,
            including Zora Labs, Inc., be liable to you or any related party for any indirect, special, incidental,
            consequential, exemplary, punitive, or other damages of any kind, including damages for business
            interruption, loss of use, data breach, revenue or profit, cost of capital, loss of business opportunity,
            loss of goodwill, or federal, state, or other regulatory liability, regardless of whether such damages were
            foreseeable and whether or not any party was advised of the possibility of such damages.
          </li>
          <li>
            ASSUMPTION OF RISK
            <br />
            <ol>
              <li>
                By accessing the Interface, you represent that you are financially and technically sophisticated enough
                to understand the inherent risks associated with using cryptographic and blockchain-based systems, and
                that you have a working knowledge of the usage and intricacies of digital assets such as ether (ETH),
                so-called stablecoins, and other digital tokens such as those following the ethereum token standard
                (ERC-20).
              </li>
              <li>
                In particular, you understand that the markets for these digital assets are nascent and highly volatile
                due to risk factors including, but not limited to, adoption, speculation, technology, security, and
                regulation. you understand that anyone can create a token, including fake versions of existing tokens
                and tokens that falsely claim to represent projects, and acknowledge and accept the risk that you may
                mistakenly trade those or other tokens. so-called stablecoins may not be as stable as they purport to
                be, may not be fully or adequately collateralized, and may be subject to panics and runs.
              </li>
              <li>
                Further, you understand that smart contract transactions automatically execute and settle, and that
                blockchain-based transactions are irreversible when confirmed. you acknowledge and accept that the cost
                and speed of transacting with cryptographic and blockchain-based systems such as ethereum are variable
                and may increase dramatically at any time. you further acknowledge and accept the risk of selecting to
                trade in expert modes, which can expose you to potentially significant price slippage and higher costs.
              </li>
              <li>
                In summary, you acknowledge that the developers or contributors to the Interface, including Zora Labs,
                Inc. are not responsible for any of these variables or risks, do not own or control the Protocol, and
                cannot be held liable for any resulting losses that you experience while accessing or using any of the
                Interface pr Protocol. Accordingly, you understand and agree to assume full responsibility for all of
                the risks of accessing and using the Interface to interact with the Protocol.
              </li>
            </ol>
          </li>
        </ol>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 640px;
  padding: 20px;
  text-align: center;
  width: 100%;
  text-align: left;
`
