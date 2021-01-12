<?php

namespace App\Entity;

use App\Repository\LeadsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LeadsRepository::class)
 */
class Leads
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $first_name;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $middle_name;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $last_name;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $email;

    /**
     * @ORM\Column(type="integer")
     */
    private $postcode;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $state;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $life_stage;

    /**
     * @ORM\Column(type="json")
     */
    private $cover_type = [];

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $health_fund;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $lead_status = [];

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $lead_uuid;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $activecampaign_id;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $date_of_birth;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $date_created;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): self
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getMiddleName(): ?string
    {
        return $this->middle_name;
    }

    public function setMiddleName(string $middle_name): self
    {
        $this->middle_name = $middle_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPostcode(): ?int
    {
        return $this->postcode;
    }

    public function setPostcode(?int $postcode): self
    {
        $this->postcode = $postcode;

        return $this;
    }

    public function getAge(): ?string
    {
        return $this->age;
    }

    public function setAge(?string $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getLifeStage(): ?string
    {
        return $this->life_stage;
    }

    public function setLifeStage(?string $life_stage): self
    {
        $this->life_stage = $life_stage;

        return $this;
    }

    public function getCoverType(): ?array
    {
        return $this->cover_type;
    }

    public function setCoverType(?array $cover_type): self
    {
        $this->cover_type = $cover_type;

        return $this;
    }

    public function getHealthFund(): ?string
    {
        return $this->health_fund;
    }

    public function setHealthFund(?string $health_fund): self
    {
        $this->health_fund = $health_fund;

        return $this;
    }

    public function getLeadStatus(): ?array
    {
        return $this->lead_status;
    }

    public function setLeadStatus(?array $lead_status): self
    {
        $this->lead_status = $lead_status;

        return $this;
    }

    public function getLeadUuid(): ?string
    {
        return $this->lead_uuid;
    }

    public function setLeadUuid(string $lead_uuid): self
    {
        $this->lead_uuid = $lead_uuid;

        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(string $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getActivecampaignId(): ?int
    {
        return $this->activecampaign_id;
    }

    public function setActivecampaignId(?int $activecampaign_id): self
    {
        $this->activecampaign_id = $activecampaign_id;

        return $this;
    }

    public function getDateOfBirth(): ?\DateTimeInterface
    {
        return $this->date_of_birth;
    }

    public function setDateOfBirth(?\DateTimeInterface $date_of_birth): self
    {
        $this->date_of_birth = $date_of_birth;

        return $this;
    }

    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->date_created;
    }

    public function setDateCreated(\DateTimeInterface $date_created): self
    {
        $this->date_created = $date_created;

        return $this;
    }
}
