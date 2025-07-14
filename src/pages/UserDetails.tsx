// React
import { Component } from "react";

// Libraries
import { connect } from "react-redux";
import styled from "styled-components";

// My Creations
import type { User } from "../types/user";
import type { RootState } from "../store/store";

// Styles
import PageContainer from "../components/styles/PageContainer";

const InfoCard = styled.div`
  border-radius: 12px;
  padding-bottom: 1rem;

  strong {
    display: block;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }


 span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  em {
    color: ${({ theme }) => theme.colors.textLight};
    font-style: italic;
    font-size: 0.75rem;
  }
`;

interface Props {
    user: User | null;
}

class UserDetails extends Component<Props> {
    render() {
        const { user } = this.props;

        if (!user) {
            return (
                <PageContainer>
                    <h2>Nenhum usuário selecionado</h2>
                </PageContainer>
            );
        }

        const {
            name,
            email,
            phone,
            website,
            address,
            company,
        } = user;

        return (
            <PageContainer>
                <h1>{name}</h1>

                <InfoCard>
                    <strong>Email:</strong>
                    <span>{email}</span>
                </InfoCard>

                <InfoCard>
                    <strong>Telefone:</strong>
                    <span>{phone}</span>
                </InfoCard>

                <InfoCard>
                    <strong>Site:</strong>
                    <span>{website}</span>
                </InfoCard>

                <InfoCard>
                    <strong>Endereço:</strong>
                    <span>{address.street}, {address.suite}</span>
                    <span>{address.city} - {address.zipcode}</span>
                </InfoCard>

                <InfoCard>
                    <strong>Empresa:</strong>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.05rem" }}>
                        <span>{company.name}</span>
                        <em>{company.catchPhrase}</em>
                    </div>
                </InfoCard>
            </PageContainer>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    user: state.users.selectedUser,
});

export default connect(mapStateToProps)(UserDetails);
