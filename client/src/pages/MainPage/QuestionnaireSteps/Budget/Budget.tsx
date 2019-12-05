import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import { getScreenSize } from '../../../../utils/utils';
import { layoutWidths } from '../../../../data/layoutWidths';
import RangeSlider from '../../../../components/shared/RangeSlider/RangeSlider';
import Button from '../../../../components/shared/Button/Button';

interface IProps {
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    questionsQuantity?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
    budget?: number,
}

const mapStateToProps = (state: any) => {
    return {
        budget: state.app.answers.budget,
    }
}

const minBudget = 0;
const maxBudget = 10000;
const defaultBudget = 2000;

const getRangeSliderWidth = () => {
    const screenSize = getScreenSize();
    switch (screenSize) {
        case layoutWidths.mobile: {
            return 230;
        }
        case layoutWidths.tablet: {
            return 340;
        }
        case layoutWidths.desktop: {
            return 400;
        }
        default: {
            return 300;
        }
    }
}

const Budget = (props: IProps) => {
    const { budget, setQuestionNumber, updateAnswers, question, questionsQuantity, goPrevButtonHandler, goNextButtonHandler } = props;
    const [budgetState, changeBudget] = useState(budget ? budget : defaultBudget);

    return (
        <>
            <div className="budget-question-container">
                <p className="budget-question-container__budget budget-question-container__budget--min">{`from $${minBudget}`}</p>
                <RangeSlider
                    width={getRangeSliderWidth()}
                    height={70} zCoord={40}
                    minValue={minBudget}
                    maxValue={maxBudget}
                    onChange={changeBudget}
                    value={budgetState}
                    step={maxBudget / 100}
                />
                <p className="budget-question-container__budget budget-question-container__budget--max">{`to $${maxBudget}`}</p>
            </div>
            <div className="question-button-container">
                <Button className="first" onClick={() => goPrevButtonHandler(setQuestionNumber, updateAnswers, budgetState, 'budget', question)}>
                    Prev
                </Button>
                <Button className="second"
                    onClick={() => goNextButtonHandler(setQuestionNumber, updateAnswers, budgetState, 'budget', question, questionsQuantity)}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(Budget);
