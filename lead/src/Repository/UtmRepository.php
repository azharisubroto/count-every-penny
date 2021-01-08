<?php

namespace App\Repository;

use App\Entity\Utm;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Utm|null find($id, $lockMode = null, $lockVersion = null)
 * @method Utm|null findOneBy(array $criteria, array $orderBy = null)
 * @method Utm[]    findAll()
 * @method Utm[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UtmRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Utm::class);
    }

    // /**
    //  * @return Utm[] Returns an array of Utm objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Utm
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
