import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Timeline from '../ui/Timeline';
import experiences from '../../data/experiences';

const ExperienceSection = () => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/experience/${id}`);
  };

  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="インターン経験（16社）" />
      <Timeline items={experiences} onDetailClick={handleDetailClick} />
    </Section>
  );
};

export default ExperienceSection;
