import Styled from "styled-components";

export const Styles = Styled.div`

.stat-card {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
}

.card-title {
    color: #6b7280; /* رمادي */
    font-size: 0.875rem;
    font-weight: 500;
    text-align: right;
}

.card-value-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
}

.card-value {
    font-size: 1.5rem;
    font-bold: 700;
    color: #1f2937;
}

.card-unit {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 400;
    margin-top: 0.25rem;
}

.card-trend {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    margin-top: auto;
}

/* حالات الألوان للـ Trend */
.trend-increase {
    color: #10b981; /* أخضر */
}

.trend-decrease {
    color: #ef4444; /* أحمر */
}







`;